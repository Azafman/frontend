const filhos = ['pedro','azaf']
const filhas = ['ana','gabi']
const todosSam = filhos.concat(filhas,'Daniel','Lucas','Joana')
console.log(todosSam, filhos, filhas);

console.log([].concat([1,2], [3,4], 5,[[6,7]]))//é interessante ressaltar que no método concat, eu "quebro" o array e jogo ele (conteúdo) dentro do array primário.