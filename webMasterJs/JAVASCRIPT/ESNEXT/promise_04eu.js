function gerarNumero (min, max, time = 2000) {
     if(min > max) [min, max] = [max, min];

     return new Promise(resolve => {
          setTimeout(() => {
               const fator = max - min + 1;
               const numeroGerado = parseInt(Math.random() * fator) + min;
               resolve(numeroGerado)
               //quando dou um .then() lá fora, é como se uma isca puxasse o resolve, e para ter acesso ao resultado gerado eu preciso esperar o tempo determinadona função setTimeout()
          }, time)
     })
}
gerarNumero(3,8).then(console.log);//poderia fazer isto, ou :
const gerandoVariosNumeros = Promise.all([
     gerarNumero(1, 60),//consigo fazer isto por ser uma promessa
     gerarNumero(1, 60),//consigo fazer isto por ser uma promessa
     gerarNumero(1, 60),//consigo fazer isto por ser uma promessa
     gerarNumero(1, 60),//consigo fazer isto por ser uma promessa
])
//Promise.all() -> executará todas as promessas descritas dentro de seu array e só depois terminara seu processo. Eu economizo código e tempo ao fazer isso, basicamente
gerandoVariosNumeros
.then(numeros => {
     console.log(numeros);
     return numeros;
})
.then(numeros => {
     const numerosGerad = [];
     numeros.map(el => numerosGerad.push(el*2))
     console.log(numerosGerad)
})
