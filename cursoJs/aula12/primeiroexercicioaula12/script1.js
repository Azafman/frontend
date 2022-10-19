function c()
{
    var msg = window.document.getElementById('msgdahora')
    var img = window.document.getElementById('img')    
    var neww = new Date()
    var hora = neww.getHours()

    if(hora > 0 && hora<=12){
        img.src = 'manha00.png'
        window.document.body.style.background = '#fdefc2'
        msg.innerText = `Agora são ${hora} horas. Um bom dia!`        
    }else if(hora>12 && hora<=18){
        img.src = 'tarde22.png'
        window.document.body.style.background = ' #e47466'
        msg.innerText = `Agora são ${hora} horas. Uma boa Tarde!`
    }
    else{
        img.src = 'noite11.png'
        window.document.body.style.background = '#061c27'
        msg.innerText = `Agora são ${hora} horas. Uma boa noite!`
    }
}