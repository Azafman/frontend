const carrinho = [
     { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
     { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
     { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
     { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
     { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true},
]
let fn = (acc,index,array) => {
     if(index == array.length-1) {
          acc += index
          return (acc)/array.length;
     }else {
          return acc += index;
     }
};
console.log(
     carrinho
     .map(el=> el.qtde* el.preco)
     .reduce(fn,0)/carrinho.length
)
console.log(
     carrinho
          .filter(el => el.fragil === true)
)
const newCar = carrinho.map(function (el) {
     return el.qtde, el.preco
})
console.log(newCar);




