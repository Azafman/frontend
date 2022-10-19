function findMax(teste){
     let max = -Infinity;
     //não existe menor que -infinity!
     for(let i=0 ; i < arguments.length; i++)
     {
          //É como se arguments se tornasse um array com os argumentos passados; Neste caso poderia ter usado o operador SPREAD
          if(arguments[i] > max){
               max = arguments[i];
          }
          //confere(arguments[i]);
     }
     console.log('O array possuí '+ arguments.length + ' números.');
     console.log(arguments)
     console.log(teste)
     console.log(...arguments)//O operador transforma algo em um array, neste caso ele transformou um array em outro array KK
     // confere(...arguments)//SPREAD -> PEGO UM ARRAY E TRANSFORMO ELE EM ARGUMENTO SEPARADO
     return max;
}

function confere (...arguments) {//REST
     for(c in arguments){
          arguments[c] % 2 == 0 ? console.log('Número Par: ' + arguments[c]) : arguments[c]+=0;
     }
}

// console.log('O maior número passado como argumento foi: ' + findMax(5,3,19,67,34,12,199,221,393,222));

let arrayNumber=[5,3,19,67,34,12,199,221,393,222];
console.log('O maior número passado como argumento foi: ' + findMax(arrayNumber));
console.log('O maior número passado como argumento foi: ' + findMax(...arrayNumber));