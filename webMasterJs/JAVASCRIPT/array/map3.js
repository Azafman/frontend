Array.prototype.mapDeepWeb = function(fn){
     let newArray = [];
     for(let c = 0; c < this.length;c++){
      newArray.push(fn(this[c], c, this))
     }
     return newArray;
}
const carrinho = [
     '{"nome":"borracha","preco": 3.45}',
     '{"nome":"Caderno","preco": 13.90}',
     '{"nome":"Kit de Lápis","preco": 41.22}',
     '{"nome":"Caneta","preco": 7.50}',
]
const novoArray = carrinho.mapDeepWeb(JSON.parse)
console.log(novoArray)