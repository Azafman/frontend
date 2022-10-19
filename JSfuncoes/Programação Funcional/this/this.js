Array.prototype.ultimo = function() {
     console.log(this[this.length-1]);
}
Array.prototype.first = function() {
     console.log(this[0]);
}
const numeros = [1,4,7,9];
numeros.ultimo();
numeros.first();