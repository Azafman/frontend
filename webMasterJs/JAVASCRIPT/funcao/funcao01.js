function soma(a, b){
     return function(c){
          return a + b + c;
     }
}
console.log(soma(3,4)(9));
const chamaTerceiraSoma = soma(9,9)
console.log(chamaTerceiraSoma(9))