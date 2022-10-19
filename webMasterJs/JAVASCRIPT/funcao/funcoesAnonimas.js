const soma = function (x, y) {
     return x + y;
}

const imprimirResultado = function(a, b, operacao = soma){
     console.log(operacao(a, b))
}
imprimirResultado(9,5)
imprimirResultado(9,5, soma)
imprimirResultado(9,5, function(x,y){
     return x - y
})
imprimirResultado(9,5, (x, y) => x * y);