class Pessoa {
     constructor(nome){
          this.nomePessoa = nome
     }

     falar(){
          console.log(`Meu nome é ${this.nomePessoa}`)
     }
}

const Azaf = new Pessoa('Mateus')
Azaf.falar()
//comparação - função factory!
// function criarPessoa (nome){
//      return {
//           falar(){console.log(`Meu nome é ${nome}`)}
//      }
// }
const criarPessoa = nome => {
     return {
          nomeP: nome,
          falar: () => console.log(`Meu nome é ${nome}`)
     }
}
const p1 = criarPessoa('Liliane')
p1.falar()