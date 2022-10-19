var number0 = 0;
var fundoButton1 = document.getElementsByTagName('button')[0]
var fundoButton2 = document.getElementsByTagName('button')[1]
fundoButton1.style.transition = '0.5s';
fundoButton2.style.transition = '0.5s';
var statusPage;

function crement(teste) 
{
     statusPage = 'on';
     if(statusPage==on)
     {
     fundoButton1.style.background = 'lightcoral';
     fundoButton1.style.borderColor = 'red';
     fundoButton1.style.color = '#29a6d8';
     fundoButton1.style.fontWeight = 'bolder';
     
     fundoButton2.style.background = 'lightcoral';
     fundoButton2.style.borderColor = 'red';
     fundoButton2.style.color = '#29a6d8';
     fundoButton2.style.fontWeight = 'bolder';
     statusPage = 'off';
     }else {
     fundoButton1.style.background ='';
     fundoButton1.style.borderColor = '';
     fundoButton1.style.color = '';
     fundoButton1.style.fontWeight = '';
     
     fundoButton2.style.background = '';
     fundoButton2.style.borderColor = '';
     fundoButton2.style.color = '';
     fundoButton2.style.fontWeight = '';
     }
     

     let txtNumber = window.document.getElementById('currentNumber')     

     if(teste == 'i'){
          number0++
     }else{
          number0--
     }

     txtNumber.innerHTML = number0
}
