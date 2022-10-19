class Produto {
     constructor(nome, preco, desc = 0.5) {
          this.nome = nome
          this.preco = preco
          this.desc = desc
     }
     
     precoFinal() {
          return this.preco * (1 - this.desc)
     }
     get precoFinal2() {
          return this.preco * (1 - this.desc)
          //com o get eu digo pro JS, que que quero acessar a função como se fosse um atributo comum. Por exemplo: p2.precoFinal2 (se eu usar isso dará problema: precoFinal2())
     }
}
const p1 = new Produto('Caneta', 10);
const p2 = new Produto('Geladeira', 1000, 0.8);
console.log(p1.precoFinal(), p2.precoFinal());
console.log(p1.precoFinal2)
