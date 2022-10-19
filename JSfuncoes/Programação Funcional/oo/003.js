function Produto(nome, preco, desconto = 0.15) {
     this.nome = nome;
     this.preco = preco;
     this._desc = desconto;

     Produto.prototype.log = function() {
          console.log(`Nome: ${this.nome} Preço: ${this.preco}`)
     }
}
const p1 = new Produto('Caneta', 8.59);
// const p2 = new Produto('Geladeira', 2345.98);
// console.log(p1.valorFinal(), p2.valorFinal());
//anotação arquivo herança4.js
//Ou seja quando eu uso uma função construtora e crio um objeto em cima dela, os objetos criados a partir dela tem a função MeuObjeto.prototype como pai!
p1.log()//ele vai puxar log do prototype
console.log(p1)
// Object.defineProperty(objeto em que vou inserir uma propriedade, nome da chave do objeto, propriedades aqui)
Object.defineProperty(Produto.prototype, 'desc', {
     get: function() {
          return this._desc
     },
     set: function(newDescont) {
          this._desc = newDescont
     }
})
// console.log(typeof Produto, typeof Produto.prototype); -> function/objeto
// Object.defineProperty(p1, 'meuNome', {
//      value: 'Mateus AZAF',
//      enumerable: true
// })
// console.log(p1.meuNome)
console.log(p1.desc)//get
p1.desc = 0.32//set
console.log(p1.desc)