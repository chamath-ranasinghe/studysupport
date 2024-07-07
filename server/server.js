const express = require("express");
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");
const fs = require('fs');
const path = require("path");
const FormData = require('form-data');

const query = require("./queries/mongoquery");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("<h3> Server Running </h3>");
});

app.post("/sign-in", (req, res) => {
  query.checkUser(req, res);
});

app.post("/insert-flashcards", (req, res) => {
  query.insertFlashcards(req, res);
});

app.post('/get-docs', async(req,res) =>{
  try {
    const {courseid} = req.body;

    // Make a GET request to Moodle API to fetch enrolled modules for the specified user
    const response = await axios.get(
      `http://localhost/moodle/webservice/rest/server.php`,
      {
        params: {
          wstoken: process.env.MOODLE_ACCESS_TOKEN,
          wsfunction: "mod_resource_get_resources_by_courses",
          moodlewsrestformat: "json",
          courseids: [courseid],
        },
      }
    );

    // Extract documents from the response
    // Filter contentfiles based on mimetype
    const documents = response.data.resources.flatMap(resource =>
      resource.contentfiles.filter(file => file.mimetype === 'application/pdf')
    );

    //const documents = response.data;
    // Return the enrolled modules as a response
    res.json(documents);
  } catch (error) {
    // Handle errors
    console.error("Error fetching documents:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

app.post("/get-flashcards", (req, res) => {
  query.getFlashCards(req, res);
});

app.post("/register", (req, res) => {
  query.addUser(req, res);
});

app.post("/get-userid", async (req, res) => {
  try {
    const moodleemail = req.body.moodleemail;

    // Make a GET request to Moodle API to fetch enrolled modules for the specified user
    const response = await axios.get(
      `http://localhost/moodle/webservice/rest/server.php`,
      {
        params: {
          wstoken: process.env.MOODLE_ACCESS_TOKEN,
          wsfunction: "core_user_get_users_by_field",
          moodlewsrestformat: "json",
          //   criteria: [{ key: "email", value: "chamathmmw@gmail.com" }],
          field: "email",
          values: [moodleemail],
        },
      }
    );

    const userId = response.data[0].id;

    query.setUserId(res, userId, moodleemail);

    res.json({ userid: userId });
  } catch (error) {
    // Handle errors
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/get-courses", async (req, res) => {

  const {userid} = req.body;
  try {
    // Make a GET request to Moodle API to fetch enrolled modules for the specified user
    const response = await axios.get(
      `http://localhost/moodle/webservice/rest/server.php`,
      {
        params: {
          wstoken: process.env.MOODLE_ACCESS_TOKEN,
          wsfunction: "core_enrol_get_users_courses",
          moodlewsrestformat: "json",
          userid: userid,
        },
      }
    );

    res.send(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

app.post("/handle-summary", async (req, res) => {
  const {fileurl} = req.body;
  const outputLocationPath = path.resolve(__dirname, 'temp.pdf');
  const targetUrl = 'http://localhost:8000/upload-pdf';

  try {
    // Download the PDF from Moodle
    const writer = fs.createWriteStream(outputLocationPath);
    const response = await axios({
      url: fileurl,
      method: 'GET',
      responseType: 'stream',
      headers: {
        // Add authentication headers if required by Moodle
        'Authorization': `Bearer ${process.env.MOODLE_ACCESS_TOKEN}`
      }
    });

    response.data.pipe(writer);

    writer.on('finish', async () => {
      console.log('PDF downloaded successfully.');

    // Prepare the file for upload
    const form = new FormData();
    form.append('file', fs.createReadStream(outputLocationPath), {
      filename: 'ProcessingFile.pdf', // Specify the filename if needed
      contentType: 'application/pdf', // Specify the content type explicitly
    });

    try {
      // Upload the PDF file to FastAPI server
      const uploadResponse = await axios.post(targetUrl, form, {
        headers: {
          ...form.getHeaders(),
        },
      });

      console.log('PDF uploaded successfully.');

      // Clean up the temporary file
      fs.unlinkSync(outputLocationPath);

      // Send a response back to the client
      res.send({
        message: 'PDF processed and uploaded successfully',
        uploadResponse: uploadResponse.data,
      });
    } catch (uploadError) {
      console.error('Error uploading PDF:', uploadError);
      fs.unlinkSync(outputLocationPath); // Clean up even if upload fails
      res.status(500).send('Error uploading PDF');
    }
  });

  writer.on('error', (error) => {
    console.error('Error writing file:', error);
    res.status(500).send('Error downloading PDF');
  });
} catch (error) {
  console.error('Error fetching PDF:', error);
  res.status(500).send('Error fetching PDF');
}

});

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
