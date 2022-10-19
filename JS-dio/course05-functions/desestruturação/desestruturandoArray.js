// const fruits = ["banana","pera","uva"];

// const banana = fruits[0];

// console.log(banana)
//

const fruits = ["banana","pera","uva"];

const [b, ,u] = fruits; //eu pego por indice

console.log(b,u);//banana e yva

const id=[48,21,424,1221,2];
let [, , id_data, ,id_mes] = id;//quero os valores 424 e 2;
console.log(id_data,id_mes);

console.log('========================');
const numerosAleatorios=[92,4,1,3,24,53];
let [noveDois,...res] = numerosAleatorios;
console.log(noveDois+ ' -> ',res);


