function calcular(x){
     return function(y){
          return function(fn){
               return fn(x,y)
          }
     }
}

function subtrair(a,b){
     return a-b;
}
function multiplicar(a,b){
     return a * b;
}
function dividir(a,b){
     return a / b;
}
function somar(a,b){
     return a+b;
}

console.log(calcular(9)(3)(subtrair))
console.log(calcular(9)(3)(multiplicar))
console.log(calcular(9)(3)(dividir))
console.log(calcular(9)(3)(somar))