(function tabuada(){
    for(let c=1;c<=10;c++){
        console.log(`${c} X ${5} = ${c*5}`)
    }
})();//chamo a função para rodar aqui, IIFE

//function arrow com IIFE
(()=>{
    console.log('Deus é bom!')
})();

(() => console.log('Deus é bom!'))();