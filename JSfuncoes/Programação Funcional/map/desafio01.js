const carrinho = [
     { nome: 'Caneta', qtde: 10, preco: 7.99 },
     { nome: 'Impressora', qtde: 4, preco: 649.50 },
     { nome: 'Caderno', qtde: 3, preco: 27.10 },
     { nome: 'Lapis', qtde: 3, preco: 5.82 },
     { nome: 'Tesoura', qtde: 1, preco: 19.20 },
]
let mapeiaNome = el => el.nome 
const nomeProdutos = carrinho.map(mapeiaNome);
let calculoResultado = valor => valor.qtde * valor.preco
const result$ = carrinho
                         .map(calculoResultado)
                         .map(el => el.toFixed(1))

console.log(nomeProdutos, result$);