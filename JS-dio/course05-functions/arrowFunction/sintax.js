// SINTAXE ArrowFunctions
const helloWorld = function(){
     return "Hello";
}
// ==
const helloWorld2 = () => {
     return "Hello";
}
// ==
const helloWorld3 = () => "Hello World";
// observações:
// Arrow functions não faz hoisting, somente funções normais
// O this sempre será o objeto globalThis. Métodos para modificar seu valor não ão funcionar(exemplo:apply);
// não existe o objeto arguments
//o construtor não pode ser usado
