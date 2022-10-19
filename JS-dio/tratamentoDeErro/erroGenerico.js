// Você pode escolher por capturar apenas tipos de erro específicos testando o tipo do erro com a propriedade constructor de erro ou, se você está escrevendo para engines de JavaScript modernas, a palavra-chave instanceof:

try {
  Objeto.Metodo();
} catch (e) {
  if (e instanceof EvalError) {
    alert(e.name + ': ' + e.message);
  } else if (e instanceof RangeError) {
    alert(e.name + ': ' + e.message);
  }
  // ... etc
}
// Quando uma única, incondicional cláusula catch é utilizada, o bloco catch  é inserido quando qualquer exceção for lançada. Por exemplo, quando a exceção ocorre no código a seguir, o controle é transferido para a cláusula catch.

try {
   throw "myException"; // gera uma exceção
}
catch (e) {
   // declarações para manipular quaisquer exceções
   logMyErrors(e); // passa o objeto de exceção para o manipulador de erro
}