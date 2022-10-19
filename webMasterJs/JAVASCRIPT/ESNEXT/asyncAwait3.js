const retornarValor = new Promise((resolve) => {
          const numAleatorio = Math.floor(Math.random() * 50)
          setTimeout(() => resolve(numAleatorio), 3000)
     })
const executar3 = async () => {
     let valor = await retornarValor
     console.log(`1°Async/Await ${valor}...`)
     return valor * 2
}
const teste1 = executar3()//é uma função assincrona por causa do async na declaração
console.log(teste1)//Promise { <pending> - Lembre-se que o código sincrono é executado primeiro, e o assincronopor último por isto, eu executo log(teste1) e o valor é pendente, porque no momento de log(teste1) o código assincrono não executado.

//ou faço isso:
async function teste3(){
     const teste2 = await executar3()
     console.log(teste2);
}
teste3()
// ou isto:
executar3()
     .then(v => console.log(v, ' h'))
//por executar3() estar marcado como assincrona, ela retorna uma promise, com o then eu aguardo a promise ser reolvida para obter o resultado dela