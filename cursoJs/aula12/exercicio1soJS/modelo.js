var corpo = document.getElementsByTagName('body')[0]
var header = document.createElement('header')
var secao = document.createElement('section')
var div1 = document.createElement('div')
var div2 = document.createElement('div')
var img = document.createElement('img')
var p1 = document.createElement('p')
var rodape = document.createElement('footer')
var tempo = new Date()
var horario = tempo.getHours() 

corpo.style.fontSize = '16pt'
corpo.style.fontFamily = 'arial'
corpo.style.color = 'white'
header.innerHTML = '<h1>Hora do Dia</h1>'
header.style.textAlign = 'center'
secao.style.background = 'white'
secao.style.padding = '20px'
secao.style.width = '550px'
secao.style.borderRadius = '15px'
secao.style.margin = 'auto'
p1.style.color='black'
p1.style.textAlign = 'center'
p1.style.fontsize = '13pt'
img.setAttribute('src','')
div2.style.marginLeft = '150px'

if(horario>=4 && horario<=13){
    p1.innerHTML = `Agora São ${horario} horas. Um bom dia!`
    corpo.style.background = '#fdefc2'
    img.setAttribute('src','manha00.png')
}else if(horario>13 && horario<=18){
    p1.innerHTML = `Agora São ${horario} horas. Uma boa tarde`
    corpo
    corpo.style.background = '#e47466'
    img.setAttribute('src','tarde22.png')
}else{
    p1.innerHTML = `Agora São ${horario} horas. Uma boa noite!`
    corpo.style.background = 'rgb(6, 28, 39)'
    img.setAttribute('src','noite11.png')
}


rodape.innerHTML = '<p>&copy; Curso em Vídeo</p>'
rodape.style.textAlign = 'center'
rodape.style.fontStyle = 'italic'


corpo.appendChild(header)
corpo.appendChild(secao)
secao.appendChild(div1)
div1.appendChild(p1)
secao.appendChild(div2)
div2.appendChild(img)
corpo.appendChild(rodape)