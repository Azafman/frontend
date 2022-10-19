// OPERADOR SPREAD/REST
function logNums(...n){
    //REST -> TRANSFORMO OS ARGUMENTOS EM ARRAY
    //Com os três pontos antes do "n", ele vira um ARRAY, COM OU SEM PARAMÊTRO
    console.log(Array.isArray(n))
    for(let c of n){
        console.log(c)
    }
    console.log('OR' + n, arguments)
}
//PARA MOSTRAR TODOS OS DADOS DO ARRAY, EU TERIA QUE FAZER DA FORMA TRADICIONAL CONFORME PÁG PASSADA SERIA ELA: logNums([99,12,31,22,76])
logNums(99,12,31,22,76)