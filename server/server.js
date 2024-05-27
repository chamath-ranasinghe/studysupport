const express = require("express");
require("dotenv").config();
const cors = require("cors");
const axios = require("axios");

const query = require("./queries/mongoquery");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

const PORT = 5000;

app.get("/",(req,res)=>{
    res.send("<h3> Server Running </h3>")
});

app.post("/sign-in",(req,res)=>{
    query.checkUser(req,res);
});

app.post("/insert-flashcards",(req,res)=>{
    query.insertFlashcards(req,res);
})

app.post("/get-flashcards",(req,res)=>{
    query.getFlashCards(req,res);
})

app.post("/register",(req,res)=>{
    query.addUser(req,res);
})

app.post("/get-userid", async (req,res)=>{
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
            field: 'email',
            values:[moodleemail]
            },
          }
        );
    
        const userId = response.data[0].id;

        query.setUserId(res,userId,moodleemail);
    
        res.json({userid: userId});
      } catch (error) {
        // Handle errors
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }

})

app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`)    
});
