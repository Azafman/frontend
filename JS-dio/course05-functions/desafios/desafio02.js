function calculeIdade(anos) {
     return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} idade.`
}
const pessoa1 = {
     nome: 'Amelia',
     idade: 23
};
const pessoa2 = {
     nome: 'Márcia',
     idade: 20
};
const pessoa3 = {
     nome: 'Jonas',
     idade: 20
};

console.log(calculeIdade.call(pessoa1,40));
console.log(calculeIdade.call(pessoa2,44));
console.log(calculeIdade.call(pessoa3,40));