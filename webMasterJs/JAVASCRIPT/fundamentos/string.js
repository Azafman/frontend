const escola = 'Cod3r';

console.log(escola.charAt(2));//d

console.log(escola.charCodeAt(3));//51
console.log(escola.substring(2))//d3r
console.log(escola.substring(0,4))//vai do indice 0 até o indice 3 -> cod3

console.log('Escola '.concat(escola).concat('!'));
console.log(escola.replace(3,'e'));//coder

console.log('Mateus, Azaf, Martins, Lima'.split(','));//[ 'Mateus', ' Azaf', ' Martins', ' Lima' ]