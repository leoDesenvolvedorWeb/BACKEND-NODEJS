const Empresa = require("../model/empresa");

const find = async (req,res) => {
    const id = req.params.id;
    // let found = false;

    return res.status(200).send(await Empresa.findById(id));

    // if(!found){
    //     res.status(404).send({message:"Não foi encontrado"});
    // }
    
}

const findAllEmpresas = async (req,res) => {
    return res.status(200).send(await Empresa.find());
}

const createEmpresa = async (req,res) => {
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

const updateEmpresa = async (req, res) =>{
    const id = req.params.id;
    const empresa = req.body;
    // let found = false;

    if(Object.keys(empresa).length === 0){
        return res.status(400).send({message: "O corpo da menssagem estar vazio"});
    }

    if(!empresa.nome){
        return res.status(400).send({message: "O campo 'nome' não foi encontrado!"});
    }

    if(!empresa.numFuncionarios){
        return res.status(400).send({message: "O campo 'numFuncionarios' não foi encontrado!"});
    }

    return res.status(200).send(await Empresa.findByIdAndUpdate(id,empresa, {returnDocument: "after"}));

    // if(!found){
    //     res.status(404).send({message:"Não foi encontrado"});
    // }
}

const deleteEmpresa = async (req, res) =>{
    const id = req.params.id;
    //let found = false;

    return res.status(200).send(await Empresa.findByIdAndDelete(id));

    // if(!found){
    //     res.status(404).send({message:"Não foi encontrado"});
    // }
}

module.exports = {
    find,
    findAllEmpresas,
    createEmpresa,
    updateEmpresa,
    deleteEmpresa
}