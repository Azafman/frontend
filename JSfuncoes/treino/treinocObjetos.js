var pessoa = {
    nome: ['Bob', 'Smith'],
    idade: 32,
    sexo: 'masculino',
    interesses: ['música', 'esquiar'],
    bio: function() {
      alert(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
      //eu guardo essa função dentro do indice bio, para executar as funcionalidadesda funçãon ${pessoa.bio()}
      //se o bio for sem (), o js entende que eu quero saber o que tem dentro do indice bio
      //porém se eu colocar com parentese vou executar a função de dentro da bio
    },
    saudacao: function() {
      alert('Oi! Eu sou ' + this.nome[0] + '.');
    }
  };
  console.log(pessoa.nome[1])
  console.log(`Meu nome é ${pessoa.nome[0]}`)