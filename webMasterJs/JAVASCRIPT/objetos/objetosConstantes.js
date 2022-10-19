// pessoa -> 1,2,3 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = "Mateus"
console.log(pessoa);

// pessoa -> 456 -> {...}
// pessoa = { nome: 'azaf' }
// é como se eu tentasse mudar o lugar da memória onde está guardado
// console.log(pessoa);

Object.freeze(pessoa)//torno o conteudo de pessoa que é um objeto constante!
pessoa.nome = 'Jc'
delete pessoa.nome
console.log(pessoa);//intacto


// const azaf = {}
//aqui o que é constante é o endereo da memória, e não o conteúdo
// sendo assim consigo alterar as chaves e valores