//setTimeout()espera tanto tempo para executar
//setTimeInterval executa em loop durante determinado intervalo de tempo
// setTimeout(() => {
//      console.log('hello')

//      setTimeout(() => {
//           console.log('hello')

//           setTimeout(() => {
//                console.log('hello')
//           }, 2000)
//      }, 2000)
// }, 2000)

function execPromise(tempo = 2000) {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve()
               console.log('Executando Promise')
          }, tempo)
     })
}
// execPromise(3000)-> (somente com este código) O código dentro da promise é executado, menos a promessa é abstraída pelo them
execPromise()//retorna uma promesa "executada", a qual eu posso pegar seu resultado usando then. O código da promise é executado
.then(() => execPromise())
.then(execPromise())