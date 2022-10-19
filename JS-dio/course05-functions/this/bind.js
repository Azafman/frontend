const retornaNomes = function () {
     return this.nome;
};
let nomes = {
     nome: 'liliane'
}

let bruno = retornaNomes.bind({nome:'Azaf'});
let bruno2 = retornaNomes.bind(nomes);

console.log(bruno);
console.log(bruno());
console.log(bruno2);
console.log(bruno2());
