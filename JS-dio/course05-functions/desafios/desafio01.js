let aluno=[
     'mateus', 8,
     'lucas', 9,
     'pedro', 3,
     'azaf', 2,
     'gesmiel', 7,
     mediaFinal = function(){
          return (this[1]+this[3]+this[5]+this[7]+this[9])/5
     }
];
let alunosAprovados=[];
let confereNotas = (alunos,notaFinal) => {     
     for(let c=1;c <= aluno.length; c+=2){
               if(aluno[c] >= notaFinal)
               {
                    alunosAprovados.push(aluno[c-1].toUpperCase())
                    alunosAprovados.push(aluno[c]);
               }
         
     }
     return alunosAprovados;
}
confereNotas(aluno, aluno[aluno.length - 1]());

let [aluno1, notaAluno1, aluno2, notaAluno2, aluno3, notaAluno3] = alunosAprovados;


console.log(`Alunos Aprovados: \n${aluno1} - Nota: ${notaAluno1}\n${aluno2} - Nota: ${notaAluno2}\n${aluno3} - Nota: ${notaAluno3}`)

