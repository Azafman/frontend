function Produto(nome, preco) {
     this.nome = nome;
     this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
     this.preco += quantia;
}
Produto.prototype.desconto = function(quantia) {
     this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
     Produto.call(this, nome, preco);
     //O objeto já foi instanciado. Ele executa a função normalmente. Leia o código pausadamente e terá o entendimento completo.
     this.cor = cor;
}

// camiseta.prototype será um objeto que tem como pai Produto.prototype
const camiseta1 = new Camiseta('Regata', 7.5, 'Preta');
camiseta1.aumento(2.1)
console.log(camiseta1);