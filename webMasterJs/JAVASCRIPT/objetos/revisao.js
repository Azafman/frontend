class Person2 {
     constructor(name) {
          this.name = name
     }

     set nome(string) {
          this.name = string
     }
     get nome(){
          return this.name
     }
}
const myPerson0 = new Person2('Azaff')
console.log(myPerson0)
myPerson0.name = 'Mateus'//set
console.log(myPerson0.nome)//get
//Teste
class Person {
     // constructor(name) {
     //      this._name = name
     // }

     set nome(string) {
          this._name = string
     }
     get nome(){
          return this._name
     }
}
const myPerson = new Person('Azaff')//essa declaração ocorre somente uma vez
// // console.log(myPerson.nome())//aqui acesso o get => [erro]
// console.log(myPerson.nome)//aqui acesso o get

// myPerson.nome('Mateus Azaf') nÃO É ASSIM, E SIM ASSIM:
myPerson.nome = 'Mateus Azaf'//acesso o set, sintaxe diferente, aqui estou mudando o nome do this._name
console.log(myPerson.nome)//aqui acesso o get



