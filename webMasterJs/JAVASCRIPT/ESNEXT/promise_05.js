function funcionarOunao(valor, chanceErro){
     return new Promise((resolve, reject) => {
          if (Math.random() < chanceErro) {
               reject('Número abaixo do permitido')
          } else {
               resolve(valor)
          }
     })
}
//ao longo da chamada para executar a promise, qualquer erro será tratado no catch
//depois de um catch posso usar um then, porém não terei mais dado para tratar
//catch então fica por último, recomendavelmente.
//situação 1
// funcionarOunao('testando...', 1)
// .then(console.log)
// .catch(err => console.log('Erro: '+ err))

//situação 2
// funcionarOunao('testando...', 0.1)
// .then(v => `Valor ${v}`)
// .then(v => console.log(v))
// .catch(err => console.log('Erro: '+ err))//se houer um erro de sintaxe acima ou minha promessa for reject, então o catch será executado
// .then(() => console.log('FIM!'))

//situação 3
funcionarOunao('testando...', 1)
.then(v => `Valor ${v}`)
.then(
     v => console.log(v),
     errorEsp => console.log('Erro Sintax '+ errorEsp)//trata o erro de cima
)
.catch(err => console.log('Erro: '+ err))//como erro já foi tratado ele irá ignorar esse catch
.then(() => console.log('FIM!'))

//situação 1: o catch só ira capturar o reject da promise
//situação 2: o catch preferencialmente ira capturar o reject da promise; todavia se houver erro de sintaxe nas declarações acima(como exemplo .then), o catch irá trata-los.
//situação 3: na linha 30, esse tratamento de texto será utilizado caso haja um reject na promise(pois é o primeiro tratamento de erro), ou haja um erro de sintaxe nas linhas acima.