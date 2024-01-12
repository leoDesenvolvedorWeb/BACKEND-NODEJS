function Cadastro(Nome, Gmail, Sexo, Senha){
    this.Nome = Nome,
    this.Gmail = Gmail,
    this.Sexo = Sexo,
    this.Senha = Senha

}


let Usuario = [];

Usuario[0] = new Cadastro("Leonardo","testeteste","Masculino","123456");

console.log(Usuario);