const falar = {
     falar(){
          console.log(this.nome + ' está falando');
     },
}
const beber = {
     beber(){
          console.log(this.nome + ' está bebendo');
     },
}
const comer = {
     comer(){
          console.log(this.nome + ' está comendo');
     },

}
const pessoaPrototye = {...falar, ...beber, ...comer}//desacoplando
function criarPessoa (nome,sobrenome) {
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