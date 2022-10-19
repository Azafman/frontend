const notaAlunos = [
     {nome: 'azaf',nota: 8},
     {nome: 'Lucas',nota: 9.5},
     {nome:'mateus', nota: 8},
     {nome: 'Paulo', nota: 9}
]
const greatStudents = students => students.nota >= 8;
const getScore = el => el.nota;
const avg = (acumulador, el, index, array) => {
     if(index === array.length-1) {
         return ((acumulador + el) / array.length);
     } else {
          return acumulador + el;
     }
}
console.log(
     notaAlunos
               .filter(greatStudents)
               .map(getScore)
               .reduce(avg)
);