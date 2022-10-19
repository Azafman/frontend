const notas = [1,2,3,542,423,3];
// for(i in notas) -> use o let para i, se não o i ficará disopnivel no restante do escopo
for(let i in notas) {
     console.log(i, notas[i]);
}
console.log('---------');
const objeto = {
     nome: 'AZaf', 
     sobrenome: 'Lima', 
     peso: 64
}
for(let c in objeto){
     console.log(objeto[c]);
}
// console.log(c); [erro] -> ReferenceError: c is not defined