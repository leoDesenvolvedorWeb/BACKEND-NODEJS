const usuarios = [
    {
        id: "1",
        nome: "Leonardo",
        Email: "teste@test",
        sexo: "masculino",
        senha: "123456"
    },
    {
        id:"2",
        nome: "Matheus",
        Email: "teste@test",
        sexo: "masculino",
        senha: "123456"
    },
    {
        id:"3",
        nome: "Barbara",
        Email: "teste@test",
        sexo: "femino",
        senha: "123456"
    },
]

const find = (req,res) => {
    const id = req.params.id;
    res.send(usuarios[id]);
}

const findAllUsuario = (req,res) => {
    res.send(usuarios);
}

const createUsuario = (req,res) => {
    const usuario = req.body;
    if(Object.keys(usuario).length === 0){
        return res.status(400).send({message: "O corpo da menssagem estar vazio"});
    }


    if(!usuario.id){
        return res.status(400).send({message: "O campo 'id' não foi encontrado!"});
    }

    if(!usuario.nome){
        return res.status(400).send({message: "O campo 'nome' não foi encontrado!"});
    }

    if(!usuario.Email){
        return res.status(400).send({message: "O campo 'Email' não foi encontrado!"});
    }

    if(!usuario.sexo){
        return res.status(400).send({message: "O campo 'sexo' não foi encontrado!"});
    }

    if(!usuario.senha){
        return res.status(400).send({message: "O campo 'senha' não foi encontrado!"});
    }


    usuario.nacionalidade = "brasileira";

    usuarios.push(usuario);
    res.status(201).send(usuarios);
}


module.exports = {
    find,
    findAllUsuario,
    createUsuario
}