new Promise((resolve, reject) => {
     resolve(['Uberlândia','Uberaba','Araxá','Araguari'])
})
.then(function(resultadoDeResolve){
     console.log(resultadoDeResolve)
     resultadoDeResolve.forEach((el, ind) => console.log(`${ind+1}: ${el}`))
     return resultadoDeResolve[0]
})
.then(function(el) {
     console.log(el.toLowerCase());
})

const p = new Promise((resolve, reject) => {
     resolve(['Uberlândia','Uberaba','Araxá','Araguari'])
})
const primeiraPosicao = el => el[0]
p
.then(primeiraPosicao)//then vira a função anônima da promise, a função dentro de then vira resolve é seu parametro é o valor gerado
.then(primeiraPosicao)
.then(console.log)