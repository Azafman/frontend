let numeros = [];
let numPares = [];

if(numeros){     
     for(let c=0;c<10;c++){
          numeros.push((Math.random()*50).toFixed())
     }
}
console.log(numeros);

let numeroParouImpar = (n) => {
     n.map(n => {
          n % 2 == 0 ? numPares.push(n) : numPares.push('Ñ PAR');
     })
     return numPares;
}
console.log(numeroParouImpar(numeros));