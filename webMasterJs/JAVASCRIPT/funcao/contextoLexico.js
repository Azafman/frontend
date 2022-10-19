// A função  tem consciência de seus dados, operações e também tem consciência do local que foi inserida
const valor = 1;
function teste1(){
     console.log(valor)//1         
     // A função  tem consciência de seus dados, operações e também tem consciência do local que foi inserida;
     //nesta área arrow function não em diferençade função tradicional;
}

let teste3 = function(){
     console.log(valor)//1
     //nesta área arrow function não em diferençade função tradicional
}
function teste2(){
     const valor = 2;
     teste1();
     (function(){
          console.log(valor)//2
     })();
     let teste4 = function(){
          console.log(valor)//2          
     }
     teste3()
     teste4()
     //o que determina o contexto léxico é o contexto em que minha função foi inscrita e não chamada!
}
teste2()
// A EXPLICAÇÃO É QUE AO SER CHAMADA (TESTE1), ESTA FUNÇÃO TEM SEU PRÓPRIO CONTEXTO, E O JS EXECUTA NO CONTEXTO DELA, E NÃO NA FUNÇÃO TESTE2