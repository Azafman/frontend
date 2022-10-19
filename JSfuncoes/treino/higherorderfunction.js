function some(n,n2){
    return function() {
        return n+n2
    }
}
let sla = some(5,5)
console.log(sla())
// a variavel sla recebe o retorno de some() + os parametros de some
/*
    sla = function(){
        return n+n2
    }
*/
//lembre do conceito de function expression

function Summer(n){
    return function(num2){
        return n**num2        
    }
}
console.log(Summer(5)(2));//Dois jeitos recomendados pela documentação Js
const opere = Summer(7)
console.log(opere(2))