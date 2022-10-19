const alunosAprovados = ['Azaf','Gesmiel','Victor','Daniel']
alunosAprovados.forEach((el, indice) => console.log(`${indice+1}: ${el}`))//0bserve: que em nenhum momento minha arrow function é invocada, só declarada. Ela é invocada dentro da função forEach.
// alunosAprovados.forEach(function(el, indice){
//      console.log(`${indice+1}: ${el}`)
// })
// forEach(function(conteudoIndice,indice,array,parametroComum))
const exibirResultado = aprovado => console.log(aprovado);
alunosAprovados.forEach(exibirResultado)//0bserve: que em nenhum momento minha arrow function é invocada, só declarada. Ela é invocada dentro da função forEach!