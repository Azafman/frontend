let arrayOfNumber=[];

let sorteiaNumero = () => {
     let c=0;
     do{
          c++
          arrayOfNumber.push((Math.random()*50).toFixed());
     }while(c < 4)
     return arrayOfNumber;
}

let realizeOperacoes = (n1, n2, n3, n4, operacao) => {
     
}

(() => {
     //console.log(sorteiaNumero(arrayOfNumber));
     sorteiaNumero(arrayOfNumber);
     realizeOperacoes(...arrayOfNumber);
})();
