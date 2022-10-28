function criarPessoa (nome,sobrenome) {
     const pessoaPrototye = {
          falar(){
               console.log(this.nome + ' está falando');
          },
          beber(){
               console.log(this.nome + ' está bebendo');
          },
          comer(){
               console.log(this.nome + ' está comendo');
          },
     }
     return Object.create(pessoaPrototye, {
          nome: {
               writable: false,
               enumerable: true,
               value: nome,
          },
          sobreNome: {
               writable: false,
               enumerable: true,
               value: sobrenome,
          },
     })
     // Esta é uma das vantagens de se usar factory functions: eu faço as mesmas coisas que outras funções; todavia aqui eu já posso configuar os atriutos do objeto
}

const p1 = criarPessoa('Mateus','lima');
console.log(p1);
p1.comer();