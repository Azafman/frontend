function CriarObjetoNome(nome){
     this.name = nome
     this.outputNome = function() { return `Hello World, my name is ${this.name}`}
     this.diz = (frase) => frase
}
const pessoa1 = new CriarObjetoNome('Mateus Azaf')
console.log(pessoa1.outputNome());
console.log(pessoa1.diz('Tenho 18 anos!!!! ').concat(pessoa1.name));


// CONCLUSÃO: É POSSÍVEL CRIAR UM OBJETO DINÂMICAMENTE, A PARTIR DE UMA FUNÇÃO FACTORY, CLASSE OU FUNÇÃO CONTRUTORA