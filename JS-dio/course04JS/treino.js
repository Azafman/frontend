let concatenaPrimeiroNome = '';
console.log(concatenaPrimeiroNome.concat(concatenaSegundoNome));
var concatenaSegundoNome = 'Mateus';
let newName = concatenaPrimeiroNome.concat(concatenaSegundoNome);
console.log(newName);

console.log('A terceira letra do meu nome é: ' + concatenaSegundoNome[2])
console.log(`My name have ${concatenaSegundoNome.length} letters.`)
console.log('A letra \"U\"de meu nome está posição '+ Number(concatenaSegundoNome.indexOf('u')+1));

concatenaPrimeiroNome = concatenaPrimeiroNome.replace(concatenaPrimeiroNome,'Azaf');


console.log(`${concatenaSegundoNome} ${concatenaPrimeiroNome}`);

newName = concatenaSegundoNome + ' ' +concatenaPrimeiroNome + ' Martins Lima';

console.log(`===============\n${newName}`);
console.log(newName.split(' ',4));

console.log(newName.includes('Mateus'));
console.log(newName.startsWith('M'));
console.log(newName.endsWith('M'));//termina com M

for(c in newName)
{
     console.log(newName[c]);
}
console.log(!3>2);
console.log(!false);





