let a = {n:5}
let b = a
console.log(a,b);
b.n = 9
console.log(a,b);//atribuição por referência, se eu mudar em um lugar mudo em tudo

let b2 = 9;
let c = b2;
console.log(b2,c);
b2 = 2;//atribuição por valor, tipo primitivo
console.log(b2,c);
