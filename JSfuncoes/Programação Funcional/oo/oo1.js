function Produto(nome, preco, desconto = 0.15) {
     this.nome = nome;
     this.preco = preco;

     this.valorFinal = function(){
          return this.preco - (this.preco * desconto)
     }
     this.valorFinal2 = function(){
          return this.preco * (1 - desconto)
     }
}
const p1 = new Produto('Caneta', 8.59);
const p2 = new Produto('Geladeira', 2345.98);
console.log(p1.valorFinal(), p2.valorFinal());
console.log(p1.valorFinal2(), p2.valorFinal2());