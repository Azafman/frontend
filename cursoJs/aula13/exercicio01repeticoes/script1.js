var botoes = document.getElementsByClassName('botn')
botoes[0].addEventListener('click',contar)
botoes[1].addEventListener('click',reiniciar)

function reiniciar()
{
    window.location.reload()    
}
function contar()
{
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.getElementById('txtn2')
    var txtcont = document.getElementById('txtcont')
    var result = document.getElementById('res')    
        if(Number(txtcont.value) <= 0)
        {
            alert('ERRO! Informe um contador válido!')
            window.location.reload()
        }   
        else if(txtn1.value.length == 0 || txtn2.value.length == 0 || txtcont.value.length == 0)
        {
            result.innerHTML = 'Impossível contar! Preencha corretamente.'
            result.style.color = 'red'
            setTimeout(function esperar(){window.location.reload()},5000)        
        }
        else
        {
            var img = '<img src="maopeq.jpg" alt="">'
            var img2 = '<img src="linhadechegada.jpg" alt="">'
            var n1 = Number(txtn1.value)
            var n2 = Number(txtn2.value)
            var cont = Number(txtcont.value)

            while(n1<=n2)
            {
                result.innerHTML += `${n1} ${img}`   
                n1+=cont
                if(n1>n2)
                {
                    result.innerHTML += `${img2}`   
                }
            }
        }    
}
