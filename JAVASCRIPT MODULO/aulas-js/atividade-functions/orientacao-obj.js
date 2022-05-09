class ContaBancaria {
    constructor(ag, num, type) {
        this.ag = ag;
        this.num = num;
        this.type = type;
        this._bal = 0;
    }

    //GETTER SALDO
    get bal() {
        return console.log("Saldo R$" + this._bal);
    }

    //SETTER SALDO
    set bal(value) {
        this._bal = this._bal + value;
        return console.log("Saldo configurado em R$" + value);
    }

    //METODO SACAR
    withdraw(value) {
        if(value <= this._bal) {
            this._bal = this._bal - value;
            return console.log("Operação realizada! Sacado R$" + value);
        }
        
        return console.log("Operação negada! Saldo insuficiente.")
    }

    //METODO DEPOSITAR
    deposit(value) {
        this._bal = this._bal + value;
        return console.log("Operação realizada! Novo Saldo R$" + this._bal);
    }
}


//CLASSE FILHA CORRENTE
class ContaCorrente extends ContaBancaria {
    constructor(ag, num, creditCard) {
        super(ag, num);
        this.type = "Corrente";
        this._creditCard = creditCard;
    }


    //GET CARTAO DE CREDITO
    get creditCard() {
        if(this._creditCard) {
            return console.log("Possui cartão de crédito.");
        }
        return console.log("Não possui cartão de crédito.");
    }
    //SET CARTAO DE CREDITO
    set creditCard(value) {
        this._creditCard = value;
        return console.log("Cartão de Crédito configurado.")
    }
}


//CLASSE FILHA POUPANCA
class ContaPoupanca extends ContaBancaria {
    constructor(ag, num) {
        super(ag, num);
        this.type = "Poupança";
    }
}


//CLASSE FILHA UNIVERSITARIA
class ContaUniversitaria extends ContaBancaria {
    constructor(ag, num) {
        super(ag, num);
        this.type = "Universitária";
    }

    withdraw(value) {
        if(value <= 500) {
            this._bal = this._bal - value;
            return console.log("Operação realizada! Saque R$" + value);
        }
        return console.log("Valor acima do limite permitido (R$ 500)");
    }
}



const corrente = new ContaCorrente(12, 2525, false);

corrente.deposit(500);
corrente.withdraw(150);
corrente.bal;

console.log("=================");

const poupanca = new ContaPoupanca(23,456);

poupanca.deposit(750);
poupanca.withdraw(501);
poupanca.bal;


console.log("=================");

const universitaria = new ContaUniversitaria(33,787);

universitaria.deposit(930);
universitaria.withdraw(499);
universitaria.bal;
console.log(universitaria.type);


