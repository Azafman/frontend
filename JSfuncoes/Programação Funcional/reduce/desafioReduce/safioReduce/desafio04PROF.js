const carrinho = [
     { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: false},
     { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: false},
     { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: true},
     { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
     { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: false},
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
const algumBolsista = (resultado, bolsista) => resultado || bolsista;

console.log(
     'Todos são bolsistas: ' + carrinho
                                        .map(a => a.fragil)
                                        .reduce(todosBolsistas),
     '\nAlgum bolsista: ' + carrinho.map(el => el.fragil).reduce(algumBolsista)
);
