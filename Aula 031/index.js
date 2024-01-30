const express = require("express");
const connectToDatabase = require("./database/database");
const authService = require("./service/auth.service");
const jwt = require("jsonwebtoken");

const app = express();

connectToDatabase();

const port = 3000;
const segredo = "erfotoretratO2e34"

app.use(express.json());

app.get("/", (req,res) =>{
    console.log(token());
    res.send("hello world"); 
});

app.post("/login", async (req, res) =>{
    try{
        const { email, senha } = req.body;
        const user = await authService.loginService(email);

        if(!user){
            return res.status(400).send({ message: "Usuario não encontrado, tente novamente"});
        }

        if(senha != user.senha){
            return res.status(400).send({ message: "Senha invalida"});
        }

        const token = authService.generateToken(user,segredo);
        res.status(200).send({
        user,
        token
        });
    }catch(err){
        console.log(`erro: ${err}`);
    }
    
});

app.get("/teste-token" , (req,res) =>{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({ menssage: "O token nao foi informado!"});
    }

    const parts = authHeader.split(" ");

    if(parts.length !== 2){
        return res.status(401).send({ message: "token invalido!"});
    }

    const [schema, token] = parts;

    if(!/^Bearer$/i.test(schema)){
        return res.status(401).send({ menssage: "token malformatado!"});
    }

    jwt.verify(token, segredo, (err, decoded) =>{
        if(err){
            console.log(`erro: ${err}`);
            return res.status(500).send({ menssage:`erro interno, tente novamente`});
        }
        console.log(decoded);
        res.send(decoded);
    });
})

app.post("/validar", async (req,res) =>{
   const {email, token} = req.body;

   const user = await authService.loginService(email);

    if(!user){
        return res.status(400).send({menssage: "Usuario nao encontrado, tente novamente"});
    }

    if(token != user.token){
        return res.status(400).send({ menssage: "token incorreto ou expirado, tente novamente"});
    } 

    user.token = "";
    await authService.updateToken(user);

    res.status(200).send(user);
});

const token = function() {
    let token = Math.random().toString(36).substring(2);
    return token;
}

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
