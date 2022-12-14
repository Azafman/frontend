// usando a notação literal
const obj1 = {}
console.log(obj1)//{}

// Object em JS
console.log(typeof Object, typeof new Object)//function object
const obj2 = new Object
console.log(obj2)//{}

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto()) //6.7915, 2249.2425

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(Object.prototype)
filha.nome = 'Ana'
console.log(Object.getPrototypeOf(filha));
console.log(filha)
// const filha2 = Object.create()//error
// const filha2 = Object.create(false)//error
// filha2.name = 'Mateus'

// Um função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
const fromJsonTwo = JSON.parse('{"nome":"AZAF","idade":"18"}')
console.log(fromJsonTwo);