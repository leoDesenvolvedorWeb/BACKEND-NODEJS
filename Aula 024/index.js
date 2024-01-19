const express = require("express");
const mongoose = require("mongoose");
const app = express();

connectToDatabase();

const port = 3000;

app.use(express.json());


app.get("/", (req,res) =>{
    res.send("hello world");
})

app.get("/mongo", (req,res) =>{
    
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
