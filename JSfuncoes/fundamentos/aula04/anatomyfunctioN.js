(function(com,n){
    console.log(`1° num: ${com}; 2° ${n}`)
    console.log(com+n)//11
})(5,6);//fazendo isso (passar os paramêtros logo após o término da função) eu consigo chamar a função.
//O NOMEDISSO É IIFE, IMMEDIATELY INVOKED FUNCTION EXPRESSION
(function(soma,soma2){
    console.log(`1° num: ${soma}; 2° ${soma2}`)
    console.log(`Soma ${soma+soma2}`)//Soma 14
})(7,7);//";" precisam estar no fnal da
//por ter duas functions anônimas eu preciso do ";"