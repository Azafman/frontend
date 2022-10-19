const x = 'Global';
const fora2 = () => x//-> PROCURA X NO ESCOPO LOCAL DA FUNÇÃO, NÃO ACHOU PROCURA NO ESCOPO DOS MÓDULOS
const fora3 = () => {
     const x = 0;
     return x
     //-> PROCURA X NO ESCOPO LOCAL DA FUNÇÃO, NÃO ACHOU PROCURA NO ESCOPO DOS MÓDULOS
}

function fora(){
     const x = 'Local';
     function dentro(){
          return x
     }
     console.log(fora2())
     console.log(fora3())
     return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao());//Local -> ( esqueça o que muda algo é o contexto em que a função é inscrita)