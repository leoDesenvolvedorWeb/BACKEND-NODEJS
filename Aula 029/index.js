const express = require("express");
const connectToDatabase = require("./database/database")
const app = express();

connectToDatabase();

const port = 3000;

app.use(express.json());

app.get("/", (req,res) =>{
    res.send("hello world");
});

app.post("/login", async (req, res) =>{
    
});

app.get("/contato", (req,res) => {
    res.send("nosso contato email@email.com");
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
