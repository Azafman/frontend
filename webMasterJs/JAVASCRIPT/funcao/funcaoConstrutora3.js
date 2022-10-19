// É CONSIDERADO UMA BOA PRÁTICA, CONTRUIR DECLARAR A PRIMEIRA LETRA DE UMA FUNÇÃO CONSRUTORA COMO MAIÚSCULA

function Ventilador(velMax){
     // o this aponta pro objeto queestá sendo criado 
     this.velocidadeMaxima = velMax;
     this.ligado = false;
}

console.log(new Ventilador(100));// eu crioaquiu um novo objeto
const ventiladorIgreja = new Ventilador(200)//aqui eu passo esse objeto criado acima, para ventiladorIgreja -> sem alterar o objeto original Ventilador, podendo reutilizar código.
console.log(ventiladorIgreja);


// const objteste = {aa:'aaaaaa'}
// const objteste2 = objteste
// console.log(objteste2);
