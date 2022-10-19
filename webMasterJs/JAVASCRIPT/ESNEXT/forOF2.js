//relembrando que somente o for/in percorre objeto, e for/OF percorre array somente.
const assuntosMap = new Map([
     ['Promise', { abordado: true}],
     ['Set', { abordado: true}],
     ['Map', { abordado: true}],
])
for(let assunto of assuntosMap) {
     console.log(assunto);
}
for(let assunto of assuntosMap.keys()) {
     console.log(assunto);
}
for(let assunto of assuntosMap.values()) {
     console.log(assunto);
}
for(let [chave, valor] of assuntosMap.entries()) {
     console.log(chave, valor);
}
const assunto2 = new Set([1,2,3,41]);
for(let numero of assunto2) {
     console.log(numero);
}