function returningtoHI(name = 'IRINEU'){
    //posso colocar no parametro um valor pré definido caso eu não chame a função sem parametro
    return `Seja Bem Vindo ao nosso sistema ${name}`
}
console.log(returningtoHI('Lucas Batista'))
const teste = returningtoHI()
console.log(teste)

const teste2 = returningtoHI
console.log(teste2)
returningtoHI()