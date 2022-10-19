const notaAlunos = [
     {nome: 'azaf',nota: 8},
     {nome: 'Lucas',nota: 7},
     {nome:'mateus', nota: 7},
     {nome: 'Paulo', nota: 3}
]
let operacao = (somaTot,index) => somaTot + index.nota;
const somaNota = notaAlunos.reduce(operacao,0)
const media = (somaNota)/Number(notaAlunos.length);
console.log(media)

let tenteFazerTudoNumBloco = notaAlunos.reduce((acumlador, indice) => acumlador + indice);