function liquidificador({/*nome da propriedade*/pera}) {
     console.log(pera)//peraaa
}

const fruits = {
     banana: 'banana',
     pera: 'peraaaa'
}
liquidificador(fruits)//nome do objeto
//emendando
function f1([frt1,...rest]) {
     console.log(frt1 + ' --> ' + rest);
}

let frutas=['laranja','mamão','abacate'];
f1(['melância','abacate','mamão']);
f1(frutas);

(function ({nString,age}) {
     console.log(nString,age)
})({nome:"Azaf",Idade:18});//undefined
(function ({nome,Idade}) {
     console.log(nome,Idade)
})({nome:"Azaf",Idade:18});//mateus 188