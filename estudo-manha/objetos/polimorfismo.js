function Conta(agencia, conta, saldo) {
     this.agencia = agencia;
     this.conta = conta;
     this.saldo = saldo;
}
Conta.prototype.sacar = function(valor) {
     if(this.saldo < valor) {
          console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);   
          return;
     }
     this.saldo -= valor;
};
Conta.prototype.depositar = function(valor) {
     this.saldo += valor;
};
Conta.prototype.verSaldo = function() {
     console.log(
          `Ag/C: ${this.agencia}/${this.conta} | Saldo: ${this.saldo}
          ` 
     );
};
const conta1 = new Conta(20, 2112, 30);
conta1.sacar(29);
conta1.verSaldo();
conta1.sacar(2);
function ContaCorrente(agencia, conta, saldo, limite) {
     Conta.call(this, agencia, conta, saldo);
     this.limite = limite;
}
function ContaPoupanca(agencia, conta, saldo, ) {
     Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;
ContaCorrente.prototype.sacar = function(valor) {
     if(valor > (this.saldo + this.limite)) {
          console.log(`Saldo insuficiente: ${this.saldo}`);
          return;
     }

     this.saldo -= valor;
     this.verSaldo();
}

const contaCorrente1 = new ContaCorrente(32, 121, 0, 100);
contaCorrente1.depositar(30);
console.log(contaCorrente1);
contaCorrente1.sacar(100);
const contaPoupanca1 = new ContaPoupanca(122, 12111, 30);
console.log(contaPoupanca1);
contaPoupanca1.sacar(33)
// POLIFMORFISMO: quando um mesmo método de uma superclasse se comporta de forma diferente em suas subclasses;
// JS SUPORTA POLIMORFISMO DE SOBREESCRITA, E NÃO DE SOBRECARGA