const empresas = [
    {
        id: 1,
        nome: "empresa 1",
        numFuncionarios: 100
    },

    {
        id: 2,
        nome: "empresa 2",
        numFuncionarios: 1200
    },

    {
        id: 3,
        nome: "empresa 3",
        numFuncionarios: 5000
    },
]

const find = (req,res) => {
    res.send("rota find");
}

const findAllEmpresas = (req,res) => {
    res.send(empresas);
}

const createEmpresa = (req,res) => {
    res.send("empresa criada com sucesso");
}

module.exports = {
    find,
    findAllEmpresas,
    createEmpresa
}