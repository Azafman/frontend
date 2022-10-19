const precoTotalProdutos = {
     prod1: [200, 100],
     prod2: [2000, 4000],
}
function getPrecoProdutos(numeroProduto, desconto = 0.05, avista){
     if(!avista) {
          return this.prod1[numeroProduto] - (this.prod1[numeroProduto] * desconto)
     } else  {
          return (this.prod1[numeroProduto] - 15) - (this.prod1[numeroProduto] * desconto);
     }
}
// console.log(getPrecoProdutos.call(precoTotalProdutos, 1, 0.05, true))// 80
const primeiroProdutoPrecoFinal = getPrecoProdutos.apply(precoTotalProdutos, [1, , true])
console.log(primeiroProdutoPrecoFinal);
const segundoProdutoPrecoFinal = getPrecoProdutos.call(precoTotalProdutos)

//bind cria uma nova função;
//apply, nem call fazem isto;