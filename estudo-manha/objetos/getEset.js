// as funções get e set são usadas para proteger alguns atributos. Por exemplo, quando eu seto um novo valor para a minha variáve, posso inserir vários valores e acabar gerando gerando um bug na minha aplicação.Veja no exemplo abaixo: 
function Produto(nome, preco, estoque) {
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
          // writable: false,
          // value: estoque, se eu deixar valor ativo me será retornada uma exceção
          configurable: true, //posso reconfigurar e apagar esta propriedade ? sim === true;
          get: function () {
               return estoque;
          }, 
          set: (valor) => {
               if(typeof valor !== 'number') {
                    console.log('value invalid');
                    return;
               } else {
                    estoque = valor;
               }
          }
     })
}
// sintax com factory
// function P2(name){
//      return {
//           get name() {
//                return name;
//           },
//           set name(novo) {

//           }
//      }
// }
// sintax com class
// class aa {
//      constructor(name) {
//           this._name = name;
//      }
//      get name() {
//           return this._name;
//      }
// }
const tenis1 = new Produto('Tênis SB', 300, 4);
console.log(tenis1.estoque);
tenis1.estoque = 2
console.log(tenis1.estoque);
tenis1.estoque = 'HAHA'