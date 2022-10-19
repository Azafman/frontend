function Pessoa(nome, idade){
     this.nome = nome;         //this -> new Pessoa
     this.idade = idade;

     this.falar = function(palavras){
          console.log(this.nome + 'diz: ' + palavras);
     };

     this.envelhecer = function(anos){
          this.idade += anos || 1;
          console.log(this);
     }
}
const vinicius = new Pessoa('Vinícius', 25);
const amanda = new Pessoa('Amando',20)

amanda.falar('Hello World!');
vinicius.falar('Hello World!');