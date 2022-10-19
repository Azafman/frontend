let idade;

const pessoa = {
     name1: 'Mateus',
     age: 18
};//não esquecça do ";"
const {name1} = pessoa; //criei uma variável cópia da propriedade name
console.log(name1.toUpperCase());

const {name1:myFirstName} = pessoa;
//Aqui renomeio a cópia criando uma nova variavel

({age:idade}=pessoa)//Atribuindo a variável já existente a propriedade age do objeto pessoa!

console.log('My name is ' + myFirstName.toLowerCase() + ', and I have ' + idade + ' years!');