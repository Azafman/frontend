// for(let letra of "cod3r") {
//      console.log(letra)
// }
// const assuntosEcma = ['Map','Set','Promise'];
// for (let i in assuntosEcma) {
//      console.log(i)
// }
// for (let i of assuntosEcma) {
//      console.log(i)
// }
const assuntosMap = new Map([
     ['Promise', { abordado: true}],
     ['Set', { abordado: true}],
     ['Map', { abordado: true}],
     // ===
     // assuntosMap = new Map();
     // assuntosMap.set('', {abordado: true})
])
// console.log(assuntosMap)
//no Map posso usar forOF para iterar suas entries
for(let [ch, el] of assuntosMap) {
     console.log(ch, el)
}
for(let assunto of assuntosMap) {
     console.log(assunto);
}
const tecnologias = new Map();
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})
for(let assunto of tecnologias) {
     console.log(assunto);
}
//POR ISSO QUE É POSSIEL USAR FOREACH NO MAP
//VEJO QUE UM MAP É UM ARRAY, 