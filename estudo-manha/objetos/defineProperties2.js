function Produto(nome, preco, estoque) {
     /* Object.defineProperties(objeto, {
          como o próprio nome diz configura várias propriedades de uma objeto de uma só vez 
          chaves: {configurações},
          chaves: {configurações},
     })*/
     Object.defineProperties(this, {
          nome: {
               enumerable: true, 
               writable: false,
               value: nome,
               configurable: true,     
          },
          preco: {
               enumerable: true, 
               writable: true,
               value: preco,
               configurable: true,     
          }
     });
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