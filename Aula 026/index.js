const express = require("express");
const mongoose = require("mongoose");
const connectToDatabase = require("./database/database")
const app = express();

connectToDatabase();

const port = 3000;

app.use(express.json());


app.get("/", (req,res) =>{
    res.send("hello world");
})

app.get("/mongo", (req,res) =>{
    mongoose.connect('mongodb://localhost:27017/aulas');

    // const gatoShema = {
    //     "nome": String,
    //     "idade": Number,
    //     "genero": String,
    //     "porte": String,
    //     "peso": Number,
    //     "docil": Boolean
    // }

    // const Cat = mongoose.model('Gato', gatoShema);

    // const gato = {
    //     nome: "Josias",
    //     idade: 4,
    //     genero: "M",
    //     porte: "Pequeno",
    //     peso: "4.3",
    //     docil: true,
    // }

    // const kitty = new Cat(gato);

    // kitty.save().thrn(() => console.log("gatinho salvo"));

    // res.send("gatinho salvo com sucesso");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
