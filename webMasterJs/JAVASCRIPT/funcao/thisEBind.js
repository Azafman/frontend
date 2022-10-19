const pessoa = {
     nome: 'Mateus',
     falar(){
          // o this aqui é o objeto pessoa
          console.log('O this é o objeto pessoa:', this === pessoa)
          console.log(this.nome)
     },
     falar2: () => {
          // o this aqui é module.exports
          console.log('O this é o module exports: ',  this === module.exports);//Lembra que o this é fixo em ARROW
          console.log(this.nome)
     }
}
pessoa.falar()
pessoa.falar2()
// const replica = pessoa.falar.bind(pessoa);
// replica();

//bind cria uma nova função
//apply, nem call fazem isto