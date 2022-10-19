/*function soma(...n){
    let tot=0
    for(let c in n){
        tot += n[c]
    }
    console.log(tot)
}
==
function soma(...n){
    let tot=0
    for(let c of n){
        tot += c (se eu colocar n[c] dará NaN)
    }
    console.log(tot)
}
*/

let sumNumerp = (...num)/*Aqui o Js converter todos os argumentos parar array*/ => {
    let tot=0
    console.log(num)//[1,23,45,2,8,6,3]
    for(let cont of num)
    {
        tot+=cont
    }
    if(Array.isArray(num)==true)
    {
        console.log('É um vetor/array')
    }else{
        console.log('Not is vector or array!')
    }
    return tot
}
console.log(sumNumerp(1,23,45,2,8,6,3))