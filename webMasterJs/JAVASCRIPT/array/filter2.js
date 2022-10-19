console.log(typeof Array)
const produtos = [
     { nome: 'Notebook', preco: 2499, fragil: true },
     { nome:  'iPad Pro', preco: 4199, fragil: true},
     { nome: 'Copo de Vidro', preco: 12.49, fragil:true },
     { nome: 'Copo de Plástico', preco:18.99, fragil: false },
]
console.log(produtos.__proto__ === Array.prototype)
Array.prototype.filterDeepWeb = function(fn){
     const newArray = [];
     for(let c = 0; c < this.length; c++){
          let result = fn(this[c], c, this)
          if(result === true) newArray.push(this[c]);
     }
     return newArray;
}
console.log(produtos.filterDeepWeb(el => el.fragil === true))

