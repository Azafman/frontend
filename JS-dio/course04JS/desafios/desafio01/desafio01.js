let conteudoString = 'ama ama';
let arrayName = [];
let contador=0;

for(cont in conteudoString) {
     arrayName.push(conteudoString[cont]);
}

let arrayNameReverse = arrayName.reverse();
console.log(arrayNameReverse);
console.log(conteudoString.split(''));

for(c in conteudoString) {
     conteudoString[c] === arrayNameReverse[c]? contador++ : contador += 0;
}

contador === conteudoString.length ? console.log('Esta palavra é um palíndromo!') : console.log('Esta palavra não é um palíndromo!');