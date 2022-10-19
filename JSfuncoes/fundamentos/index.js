let tempoAgora = new Date();
let corpo = document.getElementsByTagName('body')[0];
periodoDia(tempoAgora);

function periodoDia(hours) {
     if(hours.getHours() >= 13 && hours.getHours() <= 18) {
          personalizacaoTarde();
     } else if(hours.getHours() < 13){
          personalizacaoManha();
     } else {
          personalizacaoNoite();
     }
}

function personalizacaoTarde(){
      corpo.style.backgroundColor = 'orange';
};
function personalizacaoManha(){ 
      corpo.style = 'yellow';
};
function personalizacaoNoite() {
     corpo.style.background = 'blue';
};