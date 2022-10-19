/*Observe que, embora uma constante em JavaScript deva sempre nomear o mesmo valor, você pode alterar o conteúdo do valor que ela nomeia. Esta não é uma distinção útil para tipos simples como números ou booleanos, mas considere um objeto:

const bird = { species : 'Kestrel'};
console.log(bird.species);  // "Kestrel"
Você pode atualizar, adicionar ou remover propriedades de um objeto declarado usando const, porque mesmo que o conteúdo do objeto tenha mudado, a constante ainda está apontando para o mesmo objeto:

bird.species = 'Striated Caracara';
console.log(bird.species);  // "Striated Caracara"*/
const azaf='ola'
//azaf='heloo'erro
const objTreino={nome:'AZAF'}
console.log(objTreino.nome)
objTreino.nome='Mateus'
console.log(objTreino.nome)
/*Use constquando puder e uselet quando precisar.

Isso significa que se você puder inicializar uma variável ao declará-la e não precisar reatribuí-la posteriormente, torne-a uma constante.*/