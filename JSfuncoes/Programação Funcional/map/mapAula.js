
const pegNota = el => el.score
const pegNota2 = function(el2){return el2.score};

const students = [
     { name: 'jake',score: 9.2},
     { name: 'John',score: 1.2},
     { name: 'Paul',score: 2.2},
     { name: 'Asafe',score: 4.2}
];

const result = students
                    .map(pegNota)
                    .map(Math.ceil);
console.log(result,students)
