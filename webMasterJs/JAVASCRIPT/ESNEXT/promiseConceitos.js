let p = new Promise(function(resolve, reject) {
  //dentro de uma função passa como callback para a promise, posso declarar variaveis, realizar operacoes, etc...
  // resolve('olá');
  reject('rejeitado','dd');//só posso passar um parametro, se precisar retornar um ou mais valores, eu devo usar objecto ou array
  // ou eu tenho um reject ou um resolve em um mesmo bloco
});
//a promise possui uma função que tem duas callbacks como parametro, sendo elas resolve e reject
//resolve será executado quando tudo ocorrer como eu quero, e reject quando o resultado nor for o esperado. (eu programo a situação em que serão chamadas)
//a variável p, tem a promessa de uma hora receber um resultado, seja ele resolvido ou rejeitado. 
// só se tem acesso a esse resultado da promise usando o método then ou catch, quando eu quiser acessaar a promise(o resultado dela), eu uso estes métodos
// p.then() -> a função then executará uma função que terá por parametro o resultado de resolve
// p.catch() -> a função catch executará uma função que terá por parametro o resultado de reject
// p.then(value => console.log(value))
p.catch(function(msgReject,d){
  console.log(msgReject,d)
  //o retorno de cacth ou then, pode ser encadeada, isto é passa pra próxima função (se for eu usar uma outra função)
})
