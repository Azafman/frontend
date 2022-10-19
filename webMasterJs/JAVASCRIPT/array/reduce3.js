Array.prototype.reduceDeepWeb = function(fn, valInicial){
     if(valInicial || valInicial === 0){
          let valor = valInicial;
          for(let c = 0; c < this.length; c++){
               valor = fn(valor, this[c], c, this)
          }
          return valor;
     }
}
const numerosAleatorios = [1, 5, 3, 2, 7, 8]
const soma = (acc, el) => acc + el
console.log(numerosAleatorios.reduceDeepWeb(soma,0))
