//CLEAN CODE
function numeroPositivo(num) {  
     const ehNegativo = num < 0;
     const maiorQueDez = num > 10;

     if(ehNegativo) {
          return "Esse número é negativo!";
     } else if(!ehNegativo && maiorQueDez) {
          return "Este número é positivo e maior que 10!";
          //ou esse;
     }//else
     return "Este número é positivo!";//Ou esse;
}
console.log(numeroPositivo(66))