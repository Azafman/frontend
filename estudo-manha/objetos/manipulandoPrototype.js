// recomendação mdn: evite usar __proto__. Motivo: risco
function Exemplo1() {
}
Exemplo1.prototype.ola = 'olá';
const objA = {
     a: ';'
}
const objb = {
     b: ';'
}
Object.setPrototypeOf(objb, objA)//objA === prototype
Object.setPrototypeOf(objA, Exemplo1.prototype);
//Professor sugeriu que os métodos devem ficar no prototype da função construtora
console.log(Object.getPrototypeOf(objA));
console.log(Object.getPrototypeOf(objb));
console.log(objA.ola);
const obj3 = Object.create(Exemplo1.prototype /*o prototype do obj3 será === Exemplo1.prototype*/, {
     // aqui eu crio esse objeto já definindo o prototype dele
     preco: {
          value: 1, 
          writable: false
     },
     preco1: {
          value: 2, 
          writable: false
     },
     /*
          const filha = Object.create(Object.prototype)
          filha.nome = 'Ana'
          console.log(Object.getPrototypeOf(filha));
          console.log(filha)
     */
})
console.log(Object.getPrototypeOf(obj3));