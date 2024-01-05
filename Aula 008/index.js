const Conta ={
    numeroConta: 12345,
    agencia: 0001,
    cpfTitulas:"123.123.123-12",
    saldo: 0,

    deposito: function(valor) {
        this.saldo += valor;
        return `Saldo atual: R$${this.saldo}`;
    },

    sacar: function(valor) {
        if(this.saldo < valor){
            return `valor: R$${valor} é maior que o saldo disponivel`;
        }else{
            this.saldo -=valor;
            return `Saldo atual: R$${this.saldo}, valor sacado: R$${valor}`
        } 
    }

}