let names = {
     zeroName: 'Asaph Borba'
     //(chave):(valor)
     //(key):(value)
};

names.firstName = 'Mateus';

console.log(names);

names.age = 18;
console.log(names);
console.log(Object.keys(names));//escreve as chaves do meu objeto
console.log(Object.values(names));//escreva os values

let nomeParentes=['Eufrásio','Eliseu'];
names.nomeParentes=nomeParentes;
console.log(names);
let nomeTio="lima";
names.nomeTio = nomeTio;
console.log(names);