function falarDepoisDe(segundos, frase) {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
               resolve(frase)
               //o professor disse que o resolve chama o then
          }, segundos * 1000);
     });
}
falarDepoisDe(5, 'Promise é muito chato')
.then(resultadoDeResolve => resultadoDeResolve.toUpperCase())
.then(console.log)