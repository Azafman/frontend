const retornarValor = new Promise((resolve) => {
          const numAleatorio = Math.floor(Math.random() * 50)
          setTimeout(() => resolve(numAleatorio), 3000)
})
const executar3 = async () => {
     try {
          let valor = await retornarValo
          console.log(`1°Async/Await ${valor}...`)
          // let valor = await retornarValor
          //essa é a sintaxe para esperar uma promessa de ariavel ser cumprimda
          //o await faz esperar a execução da promessa, e transforma o valor da promessa em um valor palpável em que pode ser passado para uma variável por exemplo.
          //o await se torna meio que um then uu catch dependendo do caso, pegando o valor de resolve.
     } catch (e) {
          console.log(e.message);
     }     
}
executar3()