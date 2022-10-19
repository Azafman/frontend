console.log(soma(3)(2)(8));
function soma(n1){
     return function(n2){
          return function(n3) {
               return n1+n2+n3;
          }
     }
};

console.log(opere(3)(4));

function opere(n1){
     return function(n2) {
          return soma2(n1,n2)
     }
};
function soma2(n,n2){
     return n + n2;
};