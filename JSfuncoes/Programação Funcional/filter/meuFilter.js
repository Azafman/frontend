Array.prototype.meuFilter = function (fn) {
     const novoArray = [];
     for(let c = 0; c < this.length; c ++) {
          if(fn(this[i], i , this)) {
               novoArray.push(this[i]);
          }
     }
     return newArray;
}

const names = ['azaf','lima','allan'];
const inicialNames = names.filter(el => { 
     if (el[0] == 'a') return true;
})
// aqui eu vi que o que vai para o novo vetor só pode ser o valor do antigo, se ele atender a condição exigida
console.log(inicialNames);