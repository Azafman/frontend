// os desestruturadores (nomes) recisam ser iguais
//mesma lógica
function rand({max = 1000, min = 0, numeroAleatorio: {numero:n1}}){
     console.log('val max: ' + max);
     console.log('val min: '+ min);
     console.log('Número Teste: ' + n1)
     const valor = Math.random() * (max - min) + min;
     return Math.floor(valor);
}
let numeros = {
     max: 20,
     min: 10,
     numeroAleatorio: {
          numero: (Math.random()*500).toFixed(0)
     }
}

console.log(rand(numeros))