const pessoa = {
    nome: "Leonardo",
    sobrenome: "Ramos",
    altura: 1.68,
    idade: 22,

    envelhecer: function(anos){
        this.idade += anos;
    }
};

console.log(typeof(pessoa));
console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.envelhecer(3);
console.log(pessoa.idade);