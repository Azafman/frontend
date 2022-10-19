const exponeciacao = (x, y = 2) => {
     return {
          result: x**y
     }
}

const getResult = exponeciacao(2,2)
console.log(getResult.result);
