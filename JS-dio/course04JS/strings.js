var myName = "mateus";
let secondName = ' azaf';
//const MY_NAME = new String(myName.concat(secondName)); -> objeto
const MY_NAME = (myName.concat(secondName)); 
console.log(typeof MY_NAME);//string
console.log(MY_NAME[0]);//output: m
console.log(MY_NAME.length);//11
console.log(MY_NAME[MY_NAME.length-1]);//escrevendo a última letra
console.log(myName[0]);//com string normal tmb consigo fazer isso
console.log("\n\"")//imprimindo uma única aspa duplha
console.log(MY_NAME.toString());
var MY_NAME2 = MY_NAME.replace(' azaf', ' Lima');
console.log(MY_NAME2.toString());
console.log(MY_NAME2.split(""))//separa TUDO da minha string;
console.log(MY_NAME2.split(" "))//Tudo o que for espaço ele tira, e ajunta as palavras em indices distintos!
console.log(MY_NAME2.includes('mateus'))//na minha string tem "mateus";
console.log(MY_NAME2.startsWith("m"))//minha string começa com "m"
console.log(MY_NAME2.startsWith("a"))//minha string começa com "a"
console.log(MY_NAME2.endsWith("a"))//minha string termina com "a"
