class Lancamento {
     constructor(nome = 'Genérico',valor = 0){
          this.nome = nome;
          this.valor = valor;
     }
}

class CicloFinanceiro {
     constructor(mes,ano){
          this.mes = mes
          this.ano = ano
          this.lancamentos = [];
     }

     addLancamentos(...lance01){
          //quandoo eu chamo a função addLancamentos, eu transformo os parametros em array
          lance01.forEach(l => this.lancamentos.push(l))
     }

     sumario() {
          let valorConsolidado = 0
          this.lancamentos.forEach( l => {
               valorConsolidado += l.valor
          })
          return valorConsolidado
     }
}
const salario = new Lancamento('Salário', 4500)
const contaDeLuz = new Lancamento('Luz',-220)

const contas = new CicloFinanceiro(7,2022)
/*
contas = {
      mes:7, 
      ano:2022,
      lancamento: [],
      addLancamentos([]){
          // NESTA FUNÇÃO EU PEGO OS DOIS OBJETOS E OS JOGO PARA DENTRO DO Array com push
      },
      sumario(){}
*/

contas.addLancamentos(salario, contaDeLuz)
console.log(contas)

console.log(contas.sumario())