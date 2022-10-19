function verifique(){
    var nascimento = window.document.getElementById('txtnumber')

    if(nascimento.value.length == 0 || Number(nascimento.value)<1910 || Number(nascimento.value)>=2022)
    {
        confirm('[ERRO] - Verifique os dados e tente novamente. ')
    }
    else
    {
        var escolha = document.getElementsByName('escolha')
        var generoescol = ''
        var idade = 2022 - Number(nascimento.value)
        var escreva = document.getElementById('res')        
        var img = document.getElementById('sla')
        
        if(escolha[0].checked)
        {
            generoescol = 'homem'
            if(idade>=1 && idade<=11)
            {
                img.src = 'homemcrianca.png'
            }
            else if(idade<=19)
            {
                img.src = 'homemjovem.png'
            }
            else if(idade<=65)
            {
                img.src = 'homemadulto.png'
            }
            else 
            {
                img.src = 'homemidoso.png'
            }
        }
        else if(escolha[1].checked)
        {
            //de outro jeito
            var imgwoman = document.createElement('img')
            imgwoman.setAttribute('id','fotowoman')
            generoescol = 'mulher'
            if(idade>=1 && idade<=11)
            {
                //img.src = 'mulhercrianca.png'
                imgwoman.setAttribute('src','mulhercrianca.png')
            }
            else if(idade<=19)
            {
                //img.src = 'mulherjovem.png'
                imgwoman.setAttribute('src','mulherjovem.png')
            }
            else if(idade<=65)
            {
                //img.src = 'mulheradulta.png'
                imgwoman.setAttribute('src','mulheradulta.png')
            }
            else 
            {
                //img.src = 'mulheridosa.png'
                imgwoman.setAttribute('src','mulheridosa.png')
            }
            imgwoman.style.marginLeft = '150px'
            var corpo = document.getElementsByTagName('div')[0]
            corpo.appendChild(imgwoman)
        }
        escreva.style.textAlign = 'center'
        
        if(generoescol == 'homem')
        {
            escreva.innerText = `Detectamos um ${generoescol}, com ${idade} anos`
            //Não preciso colocar value aqui, porque aparentemente as variaveis só possuem 1 informação; sendo assim inútil especificar. O value traria na tela a palavra undefined
        }
        else if(generoescol == 'mulher')
        {
            escreva.innerText = `Detectamos uma ${generoescol}, com ${idade} anos`
            //Não preciso colocar value aqui, porque aparentemente as variaveis só possuem 1 informação; sendo assim inútil especificar. O value traria na tela a palavra undefined
        }
    }
}