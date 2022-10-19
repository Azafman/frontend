//Only for object
//DESESTRUTURAÇÃO

const arrayCPF = [700,897,866,96];
const objName = {
     firstName:'Mateus ',
     secondName:'Azaf ',
     thirdName: 'Martins ',
     fourthName: 'Lima'
};
const {first, firstName, secondName, thirdName, fourthName} = objName;
//Posso livremente criar uma variável com qualquer nome, todavia o JS irá retornar como undefined
//Então o nome da variável precisar ser igual ao nome da propriedade do objeto

console.log(`My name is ${firstName + secondName + thirdName + fourthName}`)
console.log(first)// O que foi falado acima 
console.log(`My first name is ${objName.firstName}`) //repare que, com a desestruturação o objeto "raiz" continua intacto
console.log('---------------------')
for(c in objName){
     console.log(`==========|\n#-> ${objName[c]}`)
}