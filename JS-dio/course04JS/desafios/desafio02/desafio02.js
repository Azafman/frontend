let arraOfNumbers = [];
console.log(arraOfNumbers);

if(arraOfNumbers.length > 0)
{
     for(let c=0; c<arraOfNumbers.length;c++){
          arraOfNumbers[c] % 2 === 0 ? arraOfNumbers[c]=0 : arraOfNumbers[c] = arraOfNumbers[c];
          //arraOfNumbers[c] == undefined ? arraOfNumbers[c]=-1:arraOfNumbers[c]= arraOfNumbers[c]
     }
}else{
     arraOfNumbers.push(-1);
}

console.log(arraOfNumbers);