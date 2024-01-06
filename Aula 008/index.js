const { Conta } = require("./funcoes");

const novaConta = new Conta(12345, 1001,"123.123.123-12",100);

console.log(novaConta.saldo);

novaConta.depositar(250);

console.log(novaConta.saldo);