Array.prototype.meuMap = function(fn){
     const novoArray = [];
     for(let c = 0; c < this.length; c++){
          const resultado = fn(this[c], i, this)
          novoArray.push(resultado);
     }
     return novoArray;
}
const NUMS = [1,2,3]
NUMS.meuMap((l)=>l*8)