var btnver = document.getElementById('verificar')
btnver.addEventListener('click',verificar)
function verificar() {
    var data = new Date()
    var year = data.getFullYear()
    var fano = window.document.getElementById('nasc')
    var res = document.querySelector('div#res')
    res.style.textAlign = 'center'

    if(fano.value.length == 0 || Number(fano.value) > year){
        alert('[ERROR] - Verifique os dados e tente novamente.')
        /*Não esto preocupado aqui se a pessoa tem 500 anos, mas sim se o campo da idade foi preenchido, e se foi preenchido tem uma data possível*/
    }else{
        var idade = year - Number(fano.value)
        var formopc = document.getElementsByName('escolha')
        //essa variavel recebe todos elementos que contém o nome escolha
        var gênero = ''
        var img = document.createElement('img')
        //criei uma img pelo Js
        img.setAttribute('id','foto')//dei a essa img o id=foto
        //é a mesma coisa de ir no html e criar uma img com id="foto"; existem vários caminhos.

        if(formopc[0].checked){
            gênero = 'Homem'
            //se formopc 0 foi o marcado...
            if(idade>=0 && idade<11){
                //crianca
                img.setAttribute('src','homemcrianca.png')
                //aparentemente posso atribuir vários elementos como por exemplo name, ou class por exemplo
            }else if(idade<=18){
                //jovem
                img.setAttribute('src','homemjovem.png')
            }else if(idade<=65){
                //adulto
                img.setAttribute('src','homemadulto.png')
            }else{
                //idoso
                img.setAttribute('src','homemidoso.png')
            }
        }else if(formopc[1].checked){
            gênero = 'Mulher'
            //se formopc 1 foi o marcado...
            if(idade>=0 && idade<11){
                //crianca
                img.setAttribute('src','mulhercrianca.png')
            }else if(idade<=18){
                //jovem
                img.setAttribute('src','mulherjovem.png')
            }else if(idade<=65){
                //adulto
                img.setAttribute('src','mulheradulta.png')
            }else{
                //idoso
                img.setAttribute('src','mulheridosa.png')
            }
        }
        
        res.innerHTML = `Detectamos ${gênero}, com ${idade} anos de idade`        
        res.appendChild(img)
        //vou adicionar um elemento(img)
    }
}