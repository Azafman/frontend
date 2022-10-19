function potencia(base=2){
     return function(expoente=2){
          return base**expoente
     }
}
let expoente = potencia(5)
console.log(expoente(10))

function teste(seiLa){
     return seiLa()()
}
console.log(teste(potencia))