function soma(){
     let soma = 0;
     //arguments é uma ferramenta disponível em toda função, mesmo que minha função não receba parametros, eu consigo "resgata-los", usando arguments. Ficam em forma de array.
     for(c in arguments){
          soma += arguments[c];
     }
     return soma;
}
console.log(soma(4,2,1));
console.log(soma());
console.log(soma(4,2,'ola'));//concatena -> "6ola"