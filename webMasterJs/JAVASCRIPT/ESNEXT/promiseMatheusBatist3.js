const p1 = new Promise((resolve, reject) => {
     setTimeout(() => {
          resolve('P1 ok!')
     }, 2000);//as promessas 2 e 3 esperarão a promise ser executada
     //Segundo o professor, sem usar o método then, tenho somente uma promessa, quando eu o uso, estou executando a promessa para obter o resultado
})
const p2 = new Promise((resolve, reject) => {
     resolve('P2 ok!')
})
const p3 = new Promise((resolve, reject) => {
     resolve('P3 ok!')
})
p1.then(el => {
     console.log(el);
     return p2
})
.then(el => {
     console.log(el);
     return p3
})
.then((el) => {
     console.log(el);
})
.catch(err => console.log(err))
// const resolveAll = Promise.all([p1, p2, p3])
//                .then((results => {
//                     console.log(typeof results, results)
//                     return results
//                }))
//                //assim eu resolvo aquele problema das callbacks, ou seja, umafunção só será executada quando as anteriores forem executadas
//                .then(console.log)
//                .catch(e => console.log(e.name))
// //PromiseA.all([cada posição, uma, promesa])
// //retorna um array com os resultados respectivos das promessas, o all só termina quando todas as suas promessas são resolvidas
// console.log(resolveAll); //lembre-se da ordem síncrona
p1.then(console.log)//Neste caso, estão fora de ordem devido ao fato de estarem "desconectadas", isto é, se estivessem encadeadas uma nas outras haveria ordem.
p2.then(console.log)//Neste caso, estão fora de ordem devido ao fato de estarem "desconectadas", isto é, se estivessem encadeadas uma nas outras haveria ordem.
p3.then(console.log)//Neste caso, estão fora de ordem devido ao fato de estarem "desconectadas", isto é, se estivessem encadeadas uma nas outras haveria ordem.

