function funcionarOunao(valor, chanceErro){
     return new Promise((resolve, reject) => {
          try {
               con.loG('b')
               if (Math.random() < chanceErro) {
                    reject('Número abaixo do permitido')
                    // o reject não irá cair no catch(try), porém irá cair no reject la em baixo
               } else {
                    resolve(valor)
               }
          } catch (e) {
               reject(e)
          }
     })
}
//cenário 1:
funcionarOunao('testando...', 1)
     .then(v => `Valor ${v}`)
     .then(
          v => consol.log(v),
          errorEsp => console.log('Erro Sintax: '+ errorEsp)//err o da linha 4 é tratado aqui -> (pois é o primeiro tratamento de erro)
     )
     .catch(err => console.log('Erro: '+ err))
     .then(() => console.log('FIM!'))

//cenário 2:
funcionarOunao('testando...', 1)
.then(v => `Valor ${v}`)
.then(v => consol.log(v))
.catch(err => console.log('Erro1: '+ err))
.then(() => console.log('FIM!'))
//Resumindo: devo ficar atento, saber tratar os erros, são inumeras possibilidades
//shift+delete = apagar todas linhas
