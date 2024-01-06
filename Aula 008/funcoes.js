function Conta(numeroConta,agencia, cpfTitular,saldo) {
    this.numeroConta= 12345,
    this.agencia= 1001,
    this.cpfTitular="123.123.123-12",
    this.saldo= 0,

    this.deposito = function(valor) {
        this.saldo += valor;
        return `Saldo atual: R$${this.saldo}`;
    },

    this.sacar = function(valor) {
        if(this.saldo < valor){
            return `valor: R$${valor} é maior que o saldo disponivel`;
        }else{
            this.saldo -=valor;
            return `Saldo atual: R$${this.saldo}, valor sacado: R$${valor}`
        } 
    }

}

module.exports = {
    conta
}