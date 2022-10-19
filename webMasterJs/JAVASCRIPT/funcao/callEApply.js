function getPreco(imposto = 0, moeda = 'R$'){
     return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
const produto = {
     nome: 'Notebook',
     preco: 4590,
     desc: 0.15,
     getPreco
}
global.preco = 20
global.desc = 0.1
console.log(produto.getPreco());
console.log(getPreco());

const carro = {preco: 4999, desc: 0.20}

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));


console.log(getPreco.call(carro, 0.17, '$'));//o primeiro parametro de call se refere ao objeto que esta virando o this, o restante são os parametros da propria função getPreco.
console.log(getPreco.apply(global,[0.17,'$']));
// console.log(getPreco.apply(carro,0.17,'$')); -> [err]