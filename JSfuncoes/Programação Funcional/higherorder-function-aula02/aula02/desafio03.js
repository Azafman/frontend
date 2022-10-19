//usar higher order function com arrow
let oper = (n1) => (n2) => (fn) => fn(n1,n2)
console.log((oper(3)(4)(soma)));
let operTwo = function(n1){
     return function(n2){
          return function(operacao){
               return operacao(n1,n2);
          }
     }
}

function soma(n1,n2){
     return n1+n2
};

let exponenciacao = base => exp => Math.pow(base,exp);

console.log(exponenciacao(4)(2));