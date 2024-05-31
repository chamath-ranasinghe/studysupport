const express = require("express");
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");

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

app.post("/insert-flashcards-ai", (req,res)=>{
  console.log(req.body);

  // Steps

  // Fetch PDF from Moodle

  // Process using AI

  // Store it in database

  res.send({success: true});
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
    console.log(response.data);
    const resources = response.data.resources[0];
    const documents = resources.contentfiles.filter(file => file.mimetype === "application/pdf");

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

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
