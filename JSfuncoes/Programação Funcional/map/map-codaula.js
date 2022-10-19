const students = [
    { name: 'jake',score: 9.2},
    { name: 'John',score: 1.2},
    { name: 'Paul',score: 2.2},
    { name: 'Asafe',score: 4.2}
]

let [pessoa1, pessoa2, pessoa3, pessoa4] = students;

const newStudents = students.map(Score => Score.score/2);
const newStudentsWithNota = students.map(index => {
    let obj = {name: index.name, nota: index.score/2}
    return obj;
});
console.log(newStudents[0] + '\nNota total: ' + pessoa1.score);
console.log(newStudentsWithNota);
