const pessoa = [
     { id: 3, nome: 'Luiz',},
     { id: 2, nome: 'Maria',},
     { id: 1, nome: 'Helena',},
]
for(const {id, nome} of pessoa){
     console.log(id, nome)
}
const novasPessoas = [];
for (const p of pessoa) {
     const { id } = pessoa;
     novasPessoas[id] = {...pessoa}
}
console.log(novasPessoas);