console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
// toda função tem o método prototype
String.prototype.StringReversa = function () {
     return this.split('').reverse().join('')
     //o this se refere a strnig
     //split separa toda string, inclusive espaços, transformando-a em array
     //o array tem a função de revertere seus indices -> reverse()
     //join junta toda a string
}
console.log("Escola Cod3r".StringReversa())
Array.prototype.first = function () {
     return this[0]
}
console.log([21,3423,1].first())
