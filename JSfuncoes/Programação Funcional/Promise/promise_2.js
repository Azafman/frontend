let p = new Promise(function(resolve, reject) {
  // resolve('olá');
  reject('rejeitado','dd');//só posso passar um parametro, se precisar retornar um ou mais valores, eu devo usar ojecto ou arry
  // ou eu tenho um reject ou um resolve em um mesmo bloco
});
//a variável p, tem a promessa de uma hora receber um resultado, seja ele resolvido ou rejeitado
// só se tem acesso a essa resultado usando o método then pois p por ter recebido uma new, agora é objeto
// p.then() -> a função then executará uma função que terá por parametro o resultado de resolve
// p.catch() -> a função catch executará uma função que terá por parametro o resultado de reject
// p.then(value => console.log(value))
p.catch(function(msgReject,d){
  console.log(msgReject,d)
})