// armazenar uma função em array/objeto
const run2 = (ac) => ac;
const run4 = function (){
     console.log('seila');
}

const array = [function(){}, run2, run4]
console.log(array[2]())
const myObject = {};
myObject.funcao = function() {
     return 'Let s go studying'
}
console.log(myObject.funcao());
function run(fn){
     return fn()
}
console.log(run(function(){ return 'Hello World'}))
