const pessoa={
     saudacao: 'Bom dia!',
     falar(){
          console.log(this.saudacao);
     }
}
pessoa.falar(); // aqui b this se refere ao objeto pessoa
const falar = pessoa.falar;
falar();//conflito entre paradigmas: funcional e OO -> Já  aqui o this se refere ao escopo global já que estou chamando do escopo global, não reconhcendo a propriedade saudação!
const falar2 = pessoa.falar.bind(pessoa)//no bind eu passo um OBJETO no qual eu quero que o this se refira
falar2();//Aqui eu amarro obrigo o javscript a referênciar o objeto pessoa ao this, e não o global