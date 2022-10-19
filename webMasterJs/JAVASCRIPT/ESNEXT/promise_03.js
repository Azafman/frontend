function gerarNumerosEntre(min, max) {
     if(min > max) [max, min] = [min, max];
     
     return new Promise((resolve, reject) => {
          const fator = max - min + 1;
          const numeroGerado = parseInt(Math.random() * fator) + min;
          resolve(numeroGerado);
     })
}
gerarNumerosEntre(3,7)
     .then(result => result.toFixed(2).replace('.',','))
     .then(console.log)