const nums = [5,2,5,12,34,7];
console.log('Total: ' + nums.reduce(callback));

function callback(acc, value, indice, array){
     console.log(`Na ${indice}° posição estou somando ${acc} + ${value}`)
     return acc+value;
}
//sem o valor incial do acc na declaração do reduce, o valor inicial do acc passa a ser a posição 0 do array, e o value posição 1.