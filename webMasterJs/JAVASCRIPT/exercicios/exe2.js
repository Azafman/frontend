//06
const inverso = dado => {
     if(typeof dado === 'number') {
          return (dado * -1)
     } else if(typeof dado === 'boolean') {
          return !(dado)
     } else {
          return `booleano ou número era o esperado, e não ${typeof dado}`
     }
}
console.log(inverso(9))
console.log(inverso(true))
console.log(inverso('true'))
//07 
const multiplicacaoSemProduto = function(){
     let result = 0;
     for(let i = 1; i <= arguments[1]; i++) {
          result += arguments[0];
     }
     return result;
}
console.log(multiplicacaoSemProduto(2,0))
//08
const repitaGerandoArray = (n1, n2 = 1) => {
     let array = new Array;
     for(let c = 1; c <= n2; c++) {
          array.push(n1)
     }
     return array;
}
console.log(repitaGerandoArray('Mateus Azf Martins Lima',3))
//09
const primeiroUltimoIndex = (s) => {
     
     return [s[0], s[s.length-1]]
}
console.log(primeiroUltimoIndex([1,'cdjc',9,10,'Azaf']))