const alunos = [
     { nome: 'João', nota: 7.3, bolsista: false },
     { nome: 'Maria', nota: 9.2, bolsista: true },
     { nome: 'Pedro', nota: 9.8, bolsista: false },
     { nome: 'Ana', nota: 8.7, bolsista: true },
] 
//todos alunos são bolsistas with reduce

console.log('Todos alunos são bolsistas ? '+ alunos.reduce(function(acc, el, indice, array){
     if(acc && el.bolsista) return true;
     else return false;
     // if(acc === true && el.bolsista === true) return true;
     // else return false;
}, true))
console.log(alunos.reduce(function(acc, el, indice, array){
                              if(acc || el) return true;
                              else return false;
                         },false))
