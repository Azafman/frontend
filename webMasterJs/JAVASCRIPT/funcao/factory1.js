// FUNÇÃO FACTORY É AQUELA QUE RETORNA UM OBJETO
function criarDocumento(nomeP, cpfP, logradouroP, numeroP, produtoC = 1000){
     return {
          nome: nomeP,
          cpf: cpfP,
          endereco: {
               logradouro: logradouroP,
               numero: numeroP
          },
          produtoC,
          desconto: 0.17,
          valorTotal(){
               return  produtoC - (this.produtoC*this.desconto)
          }
     }
}
const user921021 = criarDocumento('Mateus Azaf', 70089786696, 'Rua Jeová', 192)
console.log(user921021);
console.log('Sua compra ficou em R$ ' + user921021.valorTotal());