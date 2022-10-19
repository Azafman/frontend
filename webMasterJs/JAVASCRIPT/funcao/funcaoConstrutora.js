function Carro(velocidadeMaxima = 200, delta = 5){
    // atribuo interno
    let velocidadeAtual = 0;

    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }

}

const uno = new Carro
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferrari  = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);

// let objTeste = {
//     teste: ()=> this === globalThis,//false
//     teste2:()=>this===module.exports//true
// }
// console.log(
//     objTeste.teste(),
//     objTeste.teste2()//-> um objeto inscrito em uma página, tem escopo de module.exports
// );


