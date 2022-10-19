const myPromise = new Promise((resolve, reject) => {
     const nome = "Mates";

     if(nome === "Mateus") {
          resolve('Usuário Mateus encontrado!');
     } else {
          reject('Usuário não encontrado!');
     }
})
console.log('Hello Word!')
myPromise
.then((statusOperacao) => 'Atenção! '.concat(statusOperacao))
.then(console.log)
.catch(err => console.log(err))// retorno undefined
.then(console.log)//undefined, eu preciso explicitar um retorno(opcional)
//Segundo o professor, sem usar o método then, tenho somente uma promessa, quando eu o uso, estou executando a promessa para obter o resultado
//se eu chamar o reject e não o tratar terei um [erro]