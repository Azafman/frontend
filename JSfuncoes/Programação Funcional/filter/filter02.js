const carrinho = [
     { nome: 'Caneta', qtde: 10, preco: 7.99 },
     { nome: 'Impressora', qtde: 4, preco: 649.50 },
     { nome: 'Caderno', qtde: 3, preco: 27.10 },
     { nome: 'Lapis', qtde: 3, preco: 5.82 },
     { nome: 'Tesoura', qtde: 1, preco: 19.20 },
];

console.log(
     carrinho
     .filter(el => el.qtde >=3)
)
console.log(
     carrinho
     .filter(el => el.qtde >= 3)//separo os itens que tem + de 3 qntdes
     .map(elemento => elemento.nome) //dos itens separados escrevo somente os nomes deles!
)