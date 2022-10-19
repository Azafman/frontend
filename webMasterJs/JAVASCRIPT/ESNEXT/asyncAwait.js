function esperarPor(tempo = 2000) {
     return new Promise((resolve) => {
          setTimeout(() => {
               console.log('Executando Promise...')
               resolve('mat')
          }, tempo)
     })
}

async function executar2() {
     console.log('----')
     await esperarPor(1500)
     // normalmente aqui a promessa começaria a ser executada, e enquanto não fosse resolvida os códigos abaixos seriam executados(isso não aconteceria caso as promises estivessem encadeadas); todavia com o async/await o interpretador do js só irá proseguir com os códigos abaixo quando a promise for resolvida.
     .then(console.log)
     console.log('Async/Await 1...')
     
     let a = await esperarPor(4500)//o código só vai passar pra linha de baixo quando tiver terminado sua execução aqui
     console.log('Async/Await 2... '+ a)
     
     esperarPor(1500).then(console.log)
     console.log('Async/Await 3...')
}
executar2()
//o Js tem ordem, onde os códigos síncronos são executados antes dos códigos assincronos. Aqui eu mudo um pouco isso
//para poder uar o await(esperar), eu preciso usar o async na declaração da função. Por exempo
// const executarr = async () => {}

function retornarValor(tempo = 1000){
     const numAleatorio = Math.floor(Math.random() * 50)
     return new Promise((resolve) => {
          setTimeout(() => resolve(numAleatorio), tempo)
     })
}
retornarValor(5000)
.then(e => console.log('aa' + e), ' <- result')//a função dentro do then é a 1° função passada como callack para a função anônima da promise, no caso resolve. 
// .then ou .catch é a função anônima passada por parametro para promise

async function executar3() {
     //o async deve ser declarado antes de uma função, paraque dentro desta função ao executar uma promise eu use o await, isto é eu vou esperar o valor da promessa ser executada, para somente depois ocódigo continuar sendo interpretado
     let valor = await retornarValor(1500)
     console.log(`Async/Await ${valor}...`)
     //com esta atribuição, o conteudo de valor é palpável, consigo acessar
     
     let valor2 = retornarValor(1500)
     console.log(`Async/Await ${valor2}...`)
}
executar3()