//devido ao comportamento dinâmico do JS, tem se as seguintes funções para diminuir e ter + controle

//Object.preventExtensions
const produto = Object.preventExtensions({
     nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
// o objeto produto está privado de ser extendido, isto é pode ter atributos alterdos e excluídos, somente. !== de Object.freeze
produto.nome = 'Borracha'
produto.validade = '29/10/2022'
delete produto.tag
console.log(produto)
console.log('Extensível: ' + Object.isExtensible(produto))

//Object.seal
const usuario1221892 = {
     nome: 'Juliana',
     idade: 35
}
Object.seal(usuario1221892)
// o objeto fica selado, isto é, fica impossibilitado de excluir um atributo e adicionar um atruto, somente pode alterar os atributos já existentes
usuario1221892.idade = 21;
usuario1221892.endereco = 'Rua ABC'
delete usuario1221892.nome
console.log(usuario1221892)
console.log('Selado: ' + Object.isSealed(usuario1221892))

//Object freeze = selado + valores constantes