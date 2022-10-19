//map não aceita chaves iguais, repetição no caso
//1° forma de criar Map
const tecnologias = new Map();
console.log(tecnologias)
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})
console.log(tecnologias, tecnologias.react)
console.log(tecnologias.get('react'), tecnologias.get('angular').framework)
//o map é como se fosse um objeto com sintaxe diferente, acesso as suas chaves de forma diferente
//2° forma de criar Map, com um array
const chavesVariadas = new Map([
     [function() {}, 'Função'],
     [{}, 'Objeto'],
     [123, 'Número'],
     ['Número',123],
])

console.log(chavesVariadas, typeof chavesVariadas)
//Map(4) {
//      [Function (anonymous)] => 'Função',
//      {} => 'Objeto',
//      123 => 'Número',
//      'Número' => 123
//} object
chavesVariadas.forEach((el, chave) => console.log(el, chave))//neste caso é possível usar forEach vai entender
console.log(chavesVariadas.has(123))//true
console.log(chavesVariadas.has('Objeto'))//false -> vai conferir se eu tenho alguma chae com o valor 'Objeto';
console.log(chavesVariadas.size)

chavesVariadas.set(123,'a')//sobrescreve a chave 123
chavesVariadas.set(123,'b')
chavesVariadas.set(456,'b')
console.log(chavesVariadas)