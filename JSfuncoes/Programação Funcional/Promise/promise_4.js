const primeiroElemento = arrsyOuString => arrsyOuString[0]
const letraMinusc = letra => letra.toLowerCase();


console.log(typeof Promise);
new Promise(function(resolve){     
     resolve([3,4,6,7,2,2])
})
     .then(value => value.reduce(function(acc,el){
          return acc*el
     },1))
     .then(result => console.log(result))