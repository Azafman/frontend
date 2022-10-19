// ESTÁ CONFIGURAÇÃO É A DO Node, UM POUCO DIFERENTE DA DO CHROME
// globalThis -> parent(pai)
// module.exports -> child(filho)pagina atual

console.log(this === globalThis);//false
console.log(this === module.exports);//true
// conferirThisNaFuncao = conferirThisNaFuncao.bind(module.exports) -> to forçando o this ser o module.exports;
console.log(conferirThisNaFuncao()())
function conferirThisNaFuncao(){
     console.log(this === module.exports)//false
     console.log(this === globalThis)     //true
     
     return function teste(){
           console.log('aa',this === module.exports)//aa false
           console.log(this === globalThis)     //true
     }
}
let testedoThisComArrow = () => {
     console.log(this === module.exports)//true
     console.log(this === globalThis) //false
}
testedoThisComArrow()


// { 
//      console.log(this === module.exports)
//      console.log(this === globalThis)     
// }
// globalThis.conferirThisNaFuncao
// resumindo: no escopo global de um arquivo, o this se refere ao module.exports(página atual), a não ser o this dentro de uma função tradicional inscrita no escopo gloal, que se refere ao objeto globalThis. Se o mesmo ocorrer com a arrow funtion, isto é, ser escrita num contexto de module.exports(escopo global), mesmo sendo uma função o seu this será o module exports, e fixo.

