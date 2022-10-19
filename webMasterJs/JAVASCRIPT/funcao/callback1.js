const maioresTimesBrasileiros = ['São Paulo','Corinthians','Flamengo','Santos']

function sayTimes(el, indice){
     console.log(`${indice + 1}° ${el}`)
}

maioresTimesBrasileiros.forEach(sayTimes)

const escrevaNumeros = (el, indice, array) => console.log(`${indice+1}° ${el}`)
const arrayDeNumeros = [1,2,4,6,6,32]
arrayDeNumeros.forEach(escrevaNumeros)