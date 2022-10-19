/*const produtos=[
    {nome: "notebook",preco: 2100},
    {nome: "smartphone", preco: 400}
]
let prodV2 = produtos.map(function(objeto){
    return objeto.preco * 4
})
console.log(prodV2)*/

const numbers=[1,2,3,4,5,7]
//const numeTwo = numbers.map(function(l){return l**2})
const numeTwo = numbers.map((l) => l**2)
console.log(numbers,numeTwo)
