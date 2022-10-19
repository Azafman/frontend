let numbers=[];
for(let c=0;c<5;c++){
     numbers.push((Math.random()*50).toFixed(0));
}
console.log(numbers);
const newArray = numbers.filter(el => el % 2 == 0).map(num2 => num2*5);
console.log(newArray);