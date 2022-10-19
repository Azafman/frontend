const d1 = new Date(0);
const d2 = new Date(0);
console.log(d1 === d2);//não é igual pois compara endereço de memória
console.log(d1 == d2);
console.log(d1.getTime() === d2.getTime());//aqui verdadeiramente compara a hora