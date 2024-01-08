class Pessoa{
    constructor (nome, idade, altura, genero){
        this.nome = nome,
        this.idade = idade,
        this.altura = altura,
        this.genero = genero
    }

    nomeIdade = function(){
        return this.nome + " " + this.idade;
    }
}

