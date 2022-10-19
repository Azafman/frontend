// coleção dinâmica de pares chaves
const produto = new Object //const produto = {}
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto);
delete produto.preco
delete produto['marca do produto']
console.log(produto);

const carro = {
     modelo: 'A4',
     valor: 89000,
     proprietario: {
          nome: 'Raul',
          idade: 56,
          endereco: {
               logradouro: 'Rua Abc',
               numeroCase: 192
          }
     },
     condutores: [
          {nome:'Júnnior',idade:19},
          {nome:'Cléber, idade: 43'}
     ],
     calcularValorSeguro(){
          
     }
}
console.log(carro.proprietario.nome);
console.log(carro['proprietario']['idade']);
delete carro.condutores
console.log(carro);
