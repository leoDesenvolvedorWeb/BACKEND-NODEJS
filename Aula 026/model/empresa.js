const mongoose = require("mongoose");

const empresaShema = new mongoose.Schema({
    nome: {type: String, unique: true, required: true},
    numFuncionarios: {type: Number, require: true},
    nacionalidade: {type: String}
});

const Empresa = mongoose.model("empresa",empresaShema);

module.exports = Empresa;