const carrinho = [
     { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: false},
     { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: false},
     { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: true},
     { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
     { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: false},
]
const objeto = {
     todosBolsistas: 'sim',
     Algumbolsista: 'não'
}
console.log( 'Todos são bolsistas ? ' +
     carrinho.reduce(function(acc, el){
          if(el.fragil === false) return objeto.todosBolsistas = 'não\n';
          return objeto.todosBolsistas;
     }, objeto),
     'Algum bolsistas ? ' + carrinho
                                        .map(function(el){
                                             return el.fragil;
                                        })
                                        .reduce(function(acc, el, index, array){
                                             if(el === true) return objeto.Algumbolsista = 'sim';
                                             else return objeto.Algumbolsista;
                                        }, objeto)
)