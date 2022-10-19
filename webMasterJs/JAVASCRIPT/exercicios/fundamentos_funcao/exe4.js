
class TreinandoDivisao {
     constructor(dividendo, divisor){
          this.resultDivisao = dividendo / divisor;
          this.resultDivisaoInteira = dividendo % divisor;
     }

     outputResult(){
          console.log(this.resultDivisao, this.resultDivisaoInteira)
     }
}

const teste1 = new TreinandoDivisao(4,2)
console.log(teste1);
// ou
const teste2 = new TreinandoDivisao(5,2)
teste2.outputResult()