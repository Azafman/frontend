//                -5      -4       -3       -2       -1
//                 0       1        2        3       4
const nomes = ['Maria','João','Eduardo','Gbriel','Júlia'];
// Array.splice(indice, delete, elemenotsAd, elementosAD)
// indice -> a partir de qual indice vou mexer
// delete -> quantos indices serão removidos
// retorna tbm um array com mudanças(depende)
const removidos = nomes.splice(nomes.length-1, 1);
console.log(nomes, removidos);
nomes.splice(2, 0, 'Mateus');
nomes.splice(2, 0, 'Azaf','Martins','Lima');
nomes.splice(nomes.indexOf('Gbriel'), 1, 'Gabriel') // no indice 8 eu removo e adiciono gabriel
// no indice de número dois ele adicionará o terceiro parametro
nomes.splice(2, 4, 'Mateus Azaf Martins Lima')// a partir do 2° indice remove 4 indices e adicione 'mateus....'
//simulando push alógica é um pouco diferente
nomes.splice(nomes.length, 0, 'Hello World')
console.log(nomes);