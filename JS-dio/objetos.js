let nomesFamilia = {
     pai: 'José',
     mae: 'Liliane',
     filho: [{
          maisVelho: 'Azaf',
          maisNovo: 'Pedro'
     }],
     escreva(){
          console.log(`Nome do Pai: ${this.pai}\nNome da Mãe: ${this.mae}\nNome do filho Primogênito: ${this.filho[0].maisVelho}\nNome do filho Caçula: ${this.filho[0].maisNovo}`);
     }
};
//nomesFamilia.escreva();

let escreva1 = nomesFamilia.escreva.bind(nomesFamilia);
escreva1()

