const Empresa = require("../model/empresa");


const find = (req,res) => {
    const id = req.params.id;
    //let found = false;

    return res.status(200).send(Empresa.findById(id));

    // if(!found){
    //     res.status(404).send({message:"Não foi encontrado"});
    // }
    
}

const findAllEmpresas = (req,res) => {
    return res.status(200).send(Empresa.find());
}

const createEmpresa = (req,res) => {
    const empresa = req.body;

    if(Object.keys(empresa).length === 0){
        return res.status(400).send({message: "O corpo da menssagem estar vazio"});
    }

    if(!empresa.nome){
        return res.status(400).send({message: "O campo 'nome' não foi encontrado!"});
    }

    if(!empresa.numFuncionarios){
        return res.status(400).send({message: "O campo 'numFuncionarios' não foi encontrado!"});
    }

    return res.status(201).send(Empresa.create(empresa));
}

const updateEmpresa = (req, res) =>{
    const id = req.params.id;
    const empresa = req.body;
    let found = false;

    if(Object.keys(empresa).length === 0){
        return res.status(400).send({message: "O corpo da menssagem estar vazio"});
    }


    if(!empresa.id){
        return res.status(400).send({message: "O campo 'id' não foi encontrado!"});
    }

    if(!empresa.nome){
        return res.status(400).send({message: "O campo 'nome' não foi encontrado!"});
    }

    if(!empresa.numFuncionarios){
        return res.status(400).send({message: "O campo 'numFuncionarios' não foi encontrado!"});
    }

    empresas.map( function(valor, index){
        if(valor.id == id){
            found = true;
            empresas[index] = empresa;
            return res.send(empresas[index]);
        }
    });

    if(!found){
        res.status(404).send({message:"Não foi encontrado"});
    }
}

const deleteEmpresa = (req, res) =>{
    const id = req.params.id;
    let found = false;


    empresas.map( function(valor, index){
        if(valor.id == id){
            found = true;
            empresas.splice(index,1);
            return res.send(valor);
        }
    });

    if(!found){
        res.status(404).send({message:"Não foi encontrado"});
    }
}

module.exports = {
    find,
    findAllEmpresas,
    createEmpresa,
    updateEmpresa,
    deleteEmpresa
}