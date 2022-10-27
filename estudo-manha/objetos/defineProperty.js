function Produto(nome, preco, estoque) {
     this.nome = nome;
     this.preco = preco;

     Object.defineProperty(this, 'estoque', {
          enumerable: true, 
          writable: false,
          value: estoque,
          configurable: true, //posso reconfigura e apagar esta propriedade ? sim === true
     })
     Object.defineProperty(this, 'estoque', {
          enumerable: true, 
          writable: true,
          value: estoque,
          configurable: false, //posso reconfigurar esta propriedade ? sim === true
     })
}
const tenis1 = new Produto('Tênis SB', 300, 4);
tenis1.estoque = 5;
console.log(tenis1);