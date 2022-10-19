//curring
function finalPrice(tax) {
    return function(price){
        return price * (1 + tax)
    }
}
const nycFinalprice = finalPrice(0.0875)// a variavel nyc recebe a função anônima
console.log(nycFinalprice(25.1))//lembre do function expression
console.log(nycFinalprice())