var date = new Date()
var day = date.getDay()
switch(day){
    case 0:
        day = 'Hoje é Domingo'
    break
    case 1:
        day = 'Hoje é segunda'
    break
    case 2:
        day = 'Hoje é Terça'
    break
    case 3:
        day = 'Hoje é Quarta'
    break
    case 4: 
        day = 'Hoje é Quinta'
    break
    case 5:
        day = 'Hoje é Sexta'
    break
    default:
        day = 'Hoje é sábado'
    break
}
console.log(day)
/*
    domingo = 0
    segundd = 1
    terça = 2
    quarta = 3
    quinta = 4
    sexta  = 5
    sábado = 6
*/
