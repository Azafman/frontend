//  new Error ('Hello World', 'fileName', 'lineNumber')

const meuErro = new Error('Mensagem inválida');
meuErro.name = 'Teste';

console.log(meuErro);
throw "tente novamente";
// throw meuErro;
 

