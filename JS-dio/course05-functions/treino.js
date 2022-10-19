let nums=[3,5,63,2,4,1];

let nums2 = nums.map(function(numero){
     return numQuadrado(numero);
});

function numQuadrado(n1){
     return n1**2
}

console.log(nums2);
