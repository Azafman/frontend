const avo = { attrl1: 'A' }
const pai = { attrl3: 0, attrl2: 'B', __proto__: avo }
const filho = { attrl3: 'C', __proto__: pai }

Object.prototype.attrl10 = 'Hello World!';//não recomendado

console.log(
     filho.attrl0,
     filho.attrl1,
     filho.attrl2,
     filho.attrl3,//C-> sombreamento ele ignora o attrl3 de pai
     filho.attrl10
)
//se filho não tem attrl1 vai olha no seu prototype, se este tbtm não tiver vai olhar no seu prototype e se não tiver este valor retornará undefined

const carro = {
     velAtual: 0,
     velMax: 200,
     acelerarMais(delta){
          if( this.velAtual + delta <= this.velMax ){
               this.velAtual += delta
          } else {
               this.velAtual = this.velMax
          }
     },
     status(){
          return `${this.velAtual}Km/h de ${this.velMax}Km/h`
     }
}
const ferrari = {
     modelo: 'F40',
     velMax: 324 
}
const volvo = {
     modelo: 'V40',
     status(){
          return `${this.modelo}: ${super.status()}`
          // o método super intencionalmente procura o no prototipo
     }
}
Object.setPrototypeOf(ferrari, carro)//carro vira prototype de ferrari
Object.setPrototypeOf(volvo, carro)
console.log(ferrari, volvo)//somente os atributos locaisdo objeto

volvo.acelerarMais(100)
console.log(volvo.status())
ferrari.acelerarMais(300)
console.log(ferrari.status())