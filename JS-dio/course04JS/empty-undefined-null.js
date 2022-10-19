let number=0;//empty
let num2=null;

if(number)//se number tiver algum valor e o conteudo de number for != de 0; então "ele existe"
{
     console.log(number + ' existe');
}else{// ou ele é undefined ou é empty
     console.log(number + ' não existe');
}
if(!num2){
     console.log('Ou é undefined ou null ou empty');
}
