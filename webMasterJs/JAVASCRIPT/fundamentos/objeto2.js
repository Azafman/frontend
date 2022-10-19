console.log(typeof Object)
console.log(typeof new Object)


const Cliente = function() {}
console.log(typeof Cliente)//function
console.log(typeof new Cliente)//objeto por causa do name

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)//function
console.log(typeof new Produto())//object