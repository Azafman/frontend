//Arrow function(this)
const lexico1 = () => console.log(this === module.exports)
const obj1 = new Object
obj1.digaThis = lexico1
obj1.digaThis2 = function () {
     console.log(this === module.exports, this === obj1, this === global)
}
obj1.digaThis3 = () => console.log(this === module.exports, this === obj1)

lexico1()//true
obj1.digaThis()
obj1.digaThis2()
obj1.digaThis3()
//o this de uma função normal aponta pro pai do contexto em que foi inserido, ou pro objeto que o guarda
//em uma função arrow, o seu this é fixo e aponta para o local em que foi inserido, neste caso foi um modulo(uma pagina). No caso se uma arrow function for inserida em um objeto, o seu this irá apontar para onde o objeto foi inserido, no caso o module.exports, e não para o objeto.
// ESSAS "CONFIGURAÇÕES" SÃO DO NODE, AS CONFIGURAÇÕES DO NAVEGADOR SÃO DIFERENTES

//operador rest
function total(...numeros) {
     let total = 0;
     numeros.forEach(el => total += el)
     return total;
}
console.log(total(3,234,21,4))