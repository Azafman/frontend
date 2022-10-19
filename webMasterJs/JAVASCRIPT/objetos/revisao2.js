class Person2 {
     constructor(name) {
          this._name = this._capitalize(name)
     }

     set nome(string) {
          this._name = this._capitalize(string)
     }
     get nome(){
          return this._name
     }

     _capitalize(string){
          return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
     }
     //Tem o nome de _capitalize por conveção estou explicitando que este método é interno
     walk() {
          return `${this.nome} está caminhando!`
     }
}
const euAzaf = new Person2('azaf')
console.log(euAzaf.nome)
euAzaf.nome = 'mateus azaf martins lima'//set
console.log(euAzaf.nome)//get
console.log(euAzaf.walk())
class Developer extends Person2 {
     constructor(name, codeLanguage) {
          super(name)//Ele irá executar o constructor de seu pai, passando o 1° parametro, o this dela será o objeto criado aqui
          this._codeLanguage = codeLanguage
     }
}

const developer = new Developer('José','JS')
console.log(developer);
console.log(developer.nome);// busca esse método no pai
