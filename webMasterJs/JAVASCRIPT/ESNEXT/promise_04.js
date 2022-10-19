let contador = 0;
function gerarNumero (min, max, time = 2000) {
     if(min > max) [min, max] = [max, min];

     return new Promise(resolve => {
          contador++;
          setTimeout(() => {
               const fator = max - min + 1;
               const numeroGerado = parseInt(Math.random() * fator) + min;
               resolve([numeroGerado, ` -> ${contador}`])
          }, time)
     })
}
const p = new Promise(resolve => {
     setTimeout(() => {
          const numeroGerado = parseInt(Math.random() * 50);
          resolve(numeroGerado)
     }, 4000)
})
function gerarVariosNumeros(){
     return Promise.all([
     gerarNumero(1, 60, 4000),//se minhas promessas estivessem variaveis, a sintaxe mudaria 
     gerarNumero(1, 60, 1000),//se minhas promessas estivessem variaveis, a sintaxe mudaria 
     gerarNumero(1, 60, 3000),//se minhas promessas estivessem variaveis, a sintaxe mudaria 
     gerarNumero(1, 60, 100),//se minhas promessas estivessem variaveis, a sintaxe mudaria 
     gerarNumero(1, 60, 1500),//se minhas promessas estivessem variaveis, a sintaxe mudaria 
     p])
     //promise.all retorna um array com o resultado de cada promise
     //ele esperará todas as promessas serem executadas, para depois retornar um array com a promise
}
gerarVariosNumeros()
.then(console.log);