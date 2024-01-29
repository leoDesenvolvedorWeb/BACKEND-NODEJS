const Usuario = require("../model/usuario");

const loginService = (email) => Usuario.findOne({ email });

const createUsuario = (usuario) => {
    return Usuario.create(usuario);
}

module.exports = {
    loginService ,
    createUsuario
}