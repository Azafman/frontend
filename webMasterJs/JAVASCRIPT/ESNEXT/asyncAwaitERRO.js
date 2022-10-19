function gerarNumerosEntre(min, max, numerosProibidos) {
     if(min > max) [max, min] = [min, max];
     
     return new Promise((resolve, reject) => {
          const fator = max - min + 1;
          const numeroGerado = parseInt(Math.random() * fator) + min;
          if (numerosProibidos.includes(numeroGerado)) {
               reject('Número Repetido!')
          } else {
               resolve(numeroGerado);
          }
     })
}
async function gerarMegaSena(qtdeNumeros) {
     try {
          const numeros = [];
          for (let _ of Array(qtdeNumeros).fill()) {
               numeros.push( await gerarNumerosEntre(0, 10, numeros));
               // se o await retornar um reject ele será tratado no catch
          }
          return numeros;//aqui eu resolvo a promessa!
     } catch (e) {
          throw 'que chato!!!'
     }
}
gerarMegaSena(10)
.then(console.log)
.catch(console.log);//o catch captura o thow

// // console.log(Array(10).fill());//[undefined, undefined x10]