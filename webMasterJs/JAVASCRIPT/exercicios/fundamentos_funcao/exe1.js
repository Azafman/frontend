const opere = (operacao, x, y) => {
     return operacao(x, y)
}

const soma = (num1, num2) => num1 + num2
const subtracao = (num1, num2) => num1 - num2
const multiplicacao = (num1, num2) => num1 * num2
const divisao = (num1, num2) => num1 / num2


console.log(opere(soma,1,2))
console.log(opere(subtracao,1,2))
console.log(opere(divisao,1,2))
console.log(opere(multiplicacao,1,2))