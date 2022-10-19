// o método race, resolve várias promises simultaneamente(só executa uma), porém contrastando com o all, ela é uma 'corrida', então Anão espera pelo resultado de outras promises, a race retorna a primeira promessa resolvida e depois se encerra
const p1 = new Promise((resolve, reject) => {
     setTimeout(() => {
          resolve('P1 ok!')
     }, 2000);//as promessas 2 e 3 esperarão a promise ser executada
})
const p2 = new Promise((resolve, reject) => {
     setTimeout(() => {
          resolve('P2 ok!');          
     }, 1000)
})
const p3 = new Promise((resolve, reject) => {
     resolve('P3 ok!')
})
const resolveAll = Promise.race([p1, p2, p3])
               .then(results => {
                    console.log(results)
               });