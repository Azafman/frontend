var nums = 0;
var nums2 = 0;
var soma = 0;
var situação = '';

let Calcule = (numberOne,numberTwo) => {
     nums = numberOne;
     nums2 = numberTwo;
     soma = nums + nums2;
     
     if(soma > 10 && soma <= 20)
     {
          soma === 20 ? situação = ' que é maior 10 que e igual a 20.' : situação = ' que é maior 10 que e menor que 20.';
     }else if(soma<=10) 
     {
          situação = ' que é menor que 10 e que 20.';
     }else{
          situação = ' que é maior que 10 e maior que 20.';
     };

     return numberOne === numberTwo ? true :  false;
}

Calcule(10,9) == true ? msg = `Os números ${nums} e ${nums2} são iguais` : msg = `Os números ${nums} e ${nums2} não são iguais`;

var result = `Sua soma é ${soma},`;
var msg; //IÇAMENTO

console.log(`${msg}.${result}${situação}`);