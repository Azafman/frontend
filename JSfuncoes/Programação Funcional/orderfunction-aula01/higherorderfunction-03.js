// Uma higher order function é uma função que recebe uma outra como argumento, ou uma função que retorna outra função.
function chmOutra(irineia){
    return irineia()
}

const num = chmOutra(Math.random)
console.log(`Result: ${num}`)
console.log(Math.random())
console.log(Math.random)
//ATENÇÃO num = chmOutra(Math.random != Math.random())
//num recebe o return de chmOutra
