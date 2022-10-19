let azafNumbers = [];

console.log(azafNumbers.includes(3));
azafNumbers.push(3);

console.log(azafNumbers.includes(3));
azafNumbers.push(5);

console.log(azafNumbers);


azafNumbers.reverse();
console.log(azafNumbers);

azafNumbers.forEach(function(indice){console.log(indice*2)});

let nomes = ['ola','hello','world'];
delete nomes[0];
console.log(nomes)