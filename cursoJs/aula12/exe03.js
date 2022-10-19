var new_new = new Date()
var hora = new_new.getHours()
var msg = `Agora são exatamente ${hora} Horas,`
if(hora<=12 && hora>=5){
    msg += ` bom dia!`
} else if(hora<19 && hora>12){
    msg += ` boa tarde!`
}
else{
    msg += ` boa noite!`
}
console.log(msg)

