
let selectextra = document.getElementsByTagName('select')[0]
let opntioextra = document.createElement('option') 
opntioextra.text = 'Digite um número acima.'
selectextra.appendChild(opntioextra)

function tabuada1() {
    var txtn = document.getElementById('txtnum')
    if(txtn.value.length == 0) {
        alert('[ERRO] Preencha com um número válido!')
        window.location.reload()
    }else {
        var n = Number(txtn.value)
        var select = document.getElementById('tabu')
        select.innerHTML = '' //impede que se eu fizer mis de um tabuadaos valores fiquem acomulados
        for(var n1=1;n1<=10;n1++)
        {
            var opt = document.createElement('option')
            select.style.marginTop = '10px'
            opt.value = `result{n1}`
            
            opt.text = `${n1} X ${n} = ${n1*n}`
            select.appendChild(opt)
        }
    }

}