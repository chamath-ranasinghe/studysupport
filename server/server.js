const express = require("express");
require("dotenv").config();
const cors = require("cors");

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

app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`)    
});
