const numbers = [1,2,3,4,5,6]
//map serve para alterar valor de arrays sem mudar o valor orignal dele, e jogando em outro
//array que tem as informações base == AIB
//AIB.map(função que irá realizar minha demanda,para cada posição no array indicado)

const numbersV2 = numbers.map(function(el){//o parametro el equivale ao indice
    return el**2
})
/*numbers.map() => leio assim: ao chamar a função map, imagine que há um contador que passe por todos os indices no array numbers, e o parametro d função map retorna o que eu desejo fazer*/
console.log(numbersV2[3])

const students = [
    { name: 'jake',score: 9.2},
    { name: 'John',score: 1.2},
    { name: 'Paul',score: 2.2},
    { name: 'Asafe',score: 4.2}
]
const notaStudentsMetade = students.map(indice => indice.score/2) 
console.log(notaStudentsMetade)
