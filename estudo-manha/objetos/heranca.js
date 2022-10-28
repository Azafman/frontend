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
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
//camiseta.prototype será um objeto que tem como pai roduto.prototype; dentro desse objeto eu declaro que a propriedade constructor será Camiseta. E o pprototype dele será Produto.prototype.
// Acredito que o constructor de camiseta estava saindo como Produto pelo fato de que eu havia redefinido o prototype criando um novo objeto ({}) que possuía como pai Produto.prototype, e aí por herança o constructor de camiseta vinha do constructor de Produto pq eu não havia setado ele.
function Caneca(nome, material, preco){
     Produto.call(this, nome, preco);
     this.material = material;
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta1 = new Camiseta('Regata', 7.5, 'Preta');
camiseta1.aumento(2.1);
console.log(camiseta1);
Camiseta.prototype.aumento = function (percentual) {
     // sobre escreve o método aumento
     this.preco = this.preco + (this.preco * (percentual / 100)); 
}
const caneca1 = new Caneca('Caneca p/ Café', 'plásico', 20);
caneca1.desconto(10)
console.log(caneca1);
camiseta1.aumento(50)
console.log(camiseta1);