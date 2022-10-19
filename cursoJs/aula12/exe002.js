var agora = new Date()// new Date() pega ano, minuto, mes, etc do agora(quando o códigofor executado)
var hora = agora.getHours() //joguei a hora atuaçada execução do código

console.log(`Agora são extamente ${hora} horas`)
if(hora<=12 && hora>=5){
    console.log('Bom dia!')
} else if(hora<19 && hora>12){
    console.log('Boa Tarde!')
}
else{
    console.log('Boa Noite')
}
