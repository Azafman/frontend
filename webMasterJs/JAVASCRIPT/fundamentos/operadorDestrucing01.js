const pessoa1 = {
     nome: 'nome1',
     idade: 18,
     endereco: {
          logradouro: 'Rua BsdjA',
          numeroCasa: 102,
          teste: {
               sla:'aaa',
               sss: 'aaa'
          }
     }    
}
console.log(pessoa1.endereco.numeroCasa);
const {nome:myName, idade:minhaIdade, endereco:myAdress, inexistenteTeste, inexistenteTeste2 = function(){}} = pessoa1;
console.log(myName, minhaIdade, myAdress);//nesta desestruturação endereço vira um objeto com duas chaves somente

console.log(inexistenteTeste, inexistenteTeste2);//desestruturando um objeto dentro de outro objeto

// inexistenteTeste2 = function(){} -> se não tiver nada nessa chave, então a mesma assumira uma function, me lembra os parametros pré-definidos

//desestruturando um objeto dentro de outro objeto
// let {endereco} = pessoa1;
// let {logradouro, numeroCasa} = endereco;
// console.log(logradouro, numeroCasa);
// ou
const { endereco: {logradouro:Adress, numeroCasa:numberOfHouse}} = pessoa1;
console.log(Adress, numberOfHouse);

// em casos como este, retornará problema:
const dadosTeste = {
     nome:'irineu'
}
// let {idade, sonho} = dadosTeste;//não da erro
// console.log(idade, sonho)
// let {idade:{mes,ano}} = dadosTeste;//da erro posi tento acessar a propriedade de um dado undefined/

const {endereco:{teste:{sla:teste1,sss:teste2}}} = pessoa1;
console.log(teste1, teste2);