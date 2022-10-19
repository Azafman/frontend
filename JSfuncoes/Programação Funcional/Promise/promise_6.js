function gerarNumeros(min,max){
     if(min > max) {
          [max, min] = [min, max] //DESTRUCTING
     }

     return new Promise( resolve => {
          const fator = (max - min + 1);
          const aleatorio = parseInt(Math.random() * fator) + min;
          resolve(aleatorio)
     })
}
gerarNumeros(10,30)
     .then(num => num * 10)
     .then(numX10 => `O número gerado foi ${numX10}`)
     .then(console.log)//o retuurn de uma função é passado como parametro para a função seguinte naturalmente
function gerarNumero (min, max){
     function verifica(min, max) {
          if(min < max) return function(){
               const fator = (max - min + 1);
               const aleatorio = parseInt(Math.random() * fator) + min;
          }
     }
}
