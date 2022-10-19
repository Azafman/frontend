const carrinho = [
     { nome: 'Caneta', qtde: 10, preco: 7.99 },
     { nome: 'Impressora', qtde: 0, preco: 649.50 },
     { nome: 'Caderno', qtde: 4, preco: 27.10 },
     { nome: 'Lapis', qtde: 3, preco: 5.82 },
     { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]

const soma = (tot, el) => tot + (el.qtde * el.preco);

let valorTotal = carrinho.reduce(soma,0);
console.log('R$ ' + valorTotal);


//2° jeito: 
const getTotal = item => item.qtde * item.preco;
const somaGet = (tot, valorIndex) => tot + valorIndex;
console.log(
     carrinho
          .map(getTotal)//transform carrinho em outro array
          .reduce(somaGet,0)//aqui eu somo todos os arrays multiplicados
);
let arrayNumeros = [1,2,3,4,5]
let obj = new Object
arrayNumeros.reduce((acc, el, index) => {
     return obj[el.toString().concat('°')] = el*2
}, obj)
console.log(obj)
