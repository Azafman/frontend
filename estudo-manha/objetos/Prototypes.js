function Pessoa(nome, sobreNome){
     this.nome = nome
     this.sobreNome = sobreNome;
     // this.sayName = function() {
     //      return this.nome + this.sobreNome;
     // IMAGINE QUE PARA CADA INSTÂNCIA NOVA, EU TENHA QUE CRIAR ESSA FUNÇÃO, ISTO PARA O USUÁRIO RESULTARIA EM PERCA DE RESULTADO; EM CONTRA PARTIDA EU CRIOU UMA ÚNICA VEZ PELO PROTOTYPE
     // }
}
Pessoa.prototype.sayName = function () { 
     return this.nome + ' ' + this.sobreNome;
};
const p1 = new Pessoa("Mateus","Lima");
console.log(p1.sayName());