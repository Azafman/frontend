const pai = { nome: 'José', corCabelo: 'preto' }
const filho = Object.create(pai)//aqui eu crio um objeto que tem como prototype o pai
filho.nome = 'Azaf';
console.log(filho, filho.corCabelo)

const objQualquer = Object.create(null)
console.log(objQualquer.__proto__ )//undefined

const filha2 = Object.create(pai, {
     nome: { value: 'Bia', writable: false, enumerable: true},
     idade: { value: 20, writable: false, enumerable: true},
     dataNasc: { value: '10/09/2320', writable: true, enumerable: true}
     // /aqui eu crio um objeto que tem como prototype o pai
     // e tmb que tem duas propriedas nome e idade
})

console.log(filha2)
console.log(`${filha2.nome} tem cabelo de cor ${filha2.corCabelo}`)
console.log(Object.keys(filha2), Object.values(filha2))

// for(let key in filha2){
//      filha2.hasOwnProperty(key)?//key pertence a filha2 ?
//           console.log('Do próprio obj: '+ key) : console.log('Por herança: ' + key)
// }
for(let key in filha2){
     console.log(key, filha2[key])
     // key escreve as chaves
     // filha[key] escreve as values
}
// COM O ENUMERABLE TRUE, O FOR IN PERCORRE TODOS OS ATRIBUTOS DE FILHA 2, INCLUSIVE OS DE SEU PROTOTYPE