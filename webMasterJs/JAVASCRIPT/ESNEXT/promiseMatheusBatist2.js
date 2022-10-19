//resolver várias promessas 
const p1 = new Promise((resolve, reject) => {
     console.log('P1 ok"')//esse texto aparece no console, mesmo sem eu invocar a promessa
     //IMPORTANTE ->
     //então concluo que: o código de uma promessa é executado quando ela é escrita (QUANDO A PROMESSA É PROMETIDA A UMA VARIÁVEL); porém o seu resultado 'oficial', só é acessado através do método then
});
const p2 = new Promise((resolve, reject) => {
     console.log('P2 ok"')//esse texto aparece no console, mesmo sem eu invocar a promessa
     //então concluo que: o código de uma promessa é executado quando ela é escrita (QUANDO A PROMESSA É PROMETIDA A UMA VARIÁVEL); porém o seu resultado 'oficial', só é acessado através do método then
});
const p3 = new Promise((resolve, reject) => {
     console.log('P3 ok"')//esse texto aparece no console, mesmo sem eu invocar a promessa
     //então concluo que: o código de uma promessa é executado quando ela é escrita (QUANDO A PROMESSA É PROMETIDA A UMA VARIÁVEL); porém o seu resultado 'oficial', só é acessado através do método then
});
// p1.then((e) => console.log(e))
function teste1() {
     return new Promise((resolve, reject) => {
          console.log('p4 OK')
     })
     //quando a promessa é uma function somente ao invocar ela que o código da mesma será executado.; todavia, o resulado dela (resolve()) será obtido somente quando eu acessar o método then.
}
// teste1()