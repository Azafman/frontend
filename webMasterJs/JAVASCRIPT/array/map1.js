const numeros = [1, 2, 3, 4, 5];
const soma10 = numero => numero + 10
const dobro = el => el * 2
const transformarDinheiro = el => `R$ ${el.toFixed(2).replace('.',',')}`

const dobroNumeros = numeros
                         .map(soma10)//gero um array com mesmo tamanho porém modificado
                         .map(dobro)//gero outro array modificado
                         .map(transformarDinheiro)//gero outro array modificado
                         //é importante entender que quando eu começo um map eu tenhlo um loop interno dentro dele que cria um novo array e só depois eu passo pro próximo array
console.log(dobroNumeros)
