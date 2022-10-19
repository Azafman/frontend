const funcoes = [];
for(let i = 0; i <= 10; i++){
     funcoes.push(() => console.log(i))
}
// console.log(i);[erro, i só vai ate o fim de seu escopo   ]
funcoes[7]()//7
funcoes[4]()//4
funcoes[5]()//5
//====================================
const funcoes2 = [];
for(var t = 0; t <= 10; t++){
     funcoes2.push(() => console.log(t))
     //var não tem escopo de bloco
}
console.log(t);
funcoes2[5]()//11
funcoes2[4]()//11
funcoes2[7]()//11