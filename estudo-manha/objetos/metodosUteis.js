const HE = {nome: 'azafd', idade: 18}
const LLO = HE;
HE.nome = 'Mateus'
console.log(LLO, HE);//temos esse problema
// uma forma de conserta-lo seria: 
const world = {...HE, iddd:200}
world.nome = 'lima'
console.log(LLO, HE, world);//temos esse problema 
console.log(Object.getOwnPropertyDescriptor(world, 'iddd'));//retorna as propriedades de um atributo

var o, d;

o = { get foo() { return 17; } };
d = Object.getOwnPropertyDescriptor(o, 'foo');
// d é { configurable: true, enumerable: true, get: /*A função getter*/, set: undefined }