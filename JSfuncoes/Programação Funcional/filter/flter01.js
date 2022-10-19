// o filter analisa todas as posições de um array, e onde atender sua 'demanda" ele passa p um novo array ou faz algo com estas informações
//segue a mesma lógica do map, ele roda todas as posições do array.
const students = [
     { name: 'jake',score: 9.2},
     { name: 'John',score: 1.2},
     { name: 'Paul',score: 2.2},
     { name: 'Asafe',score: 4.2}
];
const numbers = [1,2,3,4,5,6];
const validation = el => el % 2 == 0 ;// o parametro que falei mais abaixo é o (el);
//const validation2 = el => el > 10 ;
console.log(numbers.filter(el => el > 0));
console.log(numbers.filter(validation));
//console.log(numbers.filter(function(el){return el > 2};));
//A ÚNICA EXPLICAÇÃO RACIONAL, É QUE O PARAMETRO VEM IMBUTIDO NA FUNÇÃO INVOCADA DENTRO DO FILTER e que detro do filter somente o nome da função já invocada ela

const getGreatStudents = students => students.score >= 9;

console.log(students.filter(getGreatStudents));


 