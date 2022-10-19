//primeiro crio uma função anônima
var a = function (a,b){
    return a+b
}//obs aqui aparentemente não preciso de () no fim e início
var b=8
//asssim como b receebe 8, a váriavel recebe o resultado da function que seria = ab
console.log(a(8,8))
const sla=a(9,9)
const anotherSum = a
//A variável anotherSum virou uma função
console.log(sla)
console.log(anotherSum(5,5))
//IMPORTANTE: NO JS UMA VARIÁVEL PODE ASSUMIR QUALQUER VALOR, COMO INPUT OU FUNÇÃO POR EXEMPLO.