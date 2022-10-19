class Produto {
     constructor(nome, preco, desc = 0.5) {
          this._nome = nome
          this.preco = preco
          this.desc = desc
     }
     
     get nome() {
          return `Produto: ${this._nome}`
     }
     get precoFinal2() {
          return this.preco * (1 - this.desc)
     }
     //função dentro de classe === método
     set nomeMaisuculo(novoNome) {
          this._nome = novoNome.toUpperCase();
     }
}
const p1 = new Produto('Caneta', 10);
console.log(p1.nome + ': ' + p1.precoFinal2);
p1.nomeMaisuculo = 'caneta'//método set
console.log(p1.nome)//método get como um atributo
