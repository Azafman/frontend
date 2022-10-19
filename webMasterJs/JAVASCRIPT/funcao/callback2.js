const notaAlunos = [3.2, 5.5, 6.4, 8.5, 9.3, 9.1];
const getNotaMaiorQue7 = el => el > 7

console.log(notaAlunos.filter(el => el > 7))
console.log(notaAlunos.filter(getNotaMaiorQue7))
