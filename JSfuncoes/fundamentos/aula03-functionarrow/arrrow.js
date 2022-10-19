//Function expression
let sum1 = function(n){
    return n + 1
}
//expression porém sem o function e com => dps dos paramêtros
let sum2 = (num) => {
    return num/2
}
let sum3 = n => {
    return n*2
}
console.log(sum3(9))
let sum4 = n1 => n1+1
/*Quando minha função arrow tem somente um linha, essa linha precisa ser um return
sendo assim o return fica implícito*/
let Sum4 = (n1, n2) => n1 + n2