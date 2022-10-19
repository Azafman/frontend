function formateONumeroParaReal (valor, moeda = 'R$'){
     const valorFormatado =  valor.toFixed(2).replace('.',',')
     console.log(moeda + valorFormatado);
}
formateONumeroParaReal(200.1109020293)
