// var produto = (function(a,b){
//      return a*b;
// })(5,5);
// var produto02 = (function(a,b){
//      return a*b;
// })

// console.log(produto);//25
// console.log(produto02(9,4));//36

const calc = function(operacao,num1,num2){
     return operacao(num1,num2);
}

const soma = function(num1,num2){
     return num1 + num2;
}

const sub = function(num1,num2) {
     return num1 - num2;
}

const resultSoma = calc(soma,1,2);
const resultSub = calc(sub,1,2);

console.log(resultSoma);
console.log(resultSub);
