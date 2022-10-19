const minhasInformacoes = {
     nome: 'Mateus',
     idade: 18,
     peso: 65,
}
console.log(Object.keys(minhasInformacoes))//retorna um array com as cahves do obeto minhasInformacoes
console.log(Object.keys(minhasInformacoes)[0])
//sintaxe -> Object.nomFuncao(objetodesejado)
console.log(Object.values(minhasInformacoes))
//retorna um array com os valores
console.log(Object.entries(minhasInformacoes));//retorna um array que em cada indice tem uma chave e um valores respectivos

// Object.entries(minhasInformacoes).forEach(el => {
//      console.log(`${el[0]}: ${el[1]}`);
// })
Object.entries(minhasInformacoes).forEach(([chave, valor]) => {
     console.log(`${chave}: ${valor}`);
})
//criando um objeto de forma personalizada: 
Object.defineProperty(
     minhasInformacoes, //objeto que será usado
     'dataNascimento'/*nome da chave que será usada*/, { 
     enumerable: false,//qnd eu escrever todo o objeto genericamente(seja através de values, keys, ou console.log(minhasInformacoes)) no console, esta propriedade será exibida::
     writable: false,//pode ser modificada
     value: '01/01/2019'//valor
}
)
minhasInformacoes.dataNascimento = '09/221'//writable
console.log(minhasInformacoes)
console.log(minhasInformacoes.dataNascimento)

// Object.assign(EcmaScript 2015)
const dest = { a:1 }
const o1 = { b:2 }
const o2 = { c:3, a:4 }
const obj = Object.assign(dest, o1, o2)
//o objeto o1 será concatenado ao objeto dest
// depois o objeto o2 será concatenado ao objeto dest
//no caso do o2, que tem uma chave igual ao dest, o valor de chave sobrescreverá a chave de 'a' de dest
console.log(obj)

Object.freeze(obj)
obj.a = 444
Object.freeze(obj.a)
