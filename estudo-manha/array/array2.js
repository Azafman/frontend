let email = 'contato@warcontent.com';
let domain = email.slice(email.indexOf('@') +  1)
let other = email.slice(0, email.indexOf('@'))
console.log(domain, other);
console.log('-----');
let exemploHTML = '<b>texto aqui</b>'
let conteudoB = exemploHTML.slice(3,-4)
console.log(conteudoB);
const nameForSplit = 'Mateus Azaf Martins Lima'
console.log(nameForSplit.split(' '));