function gereNumeroAlaetorio([min = 0, max = 1000, , string]  = []){
     if(min > max) [min, max] = [max, min];
     //se min for maior max, o que é minímo passa a ser máximo e o que máximo passa a ser minímo 
     console.log(string);
     const valor = Math.random() * (max - min) + min;
     return Math.floor(valor);
}
const INTERVALO_NUMERO_MINEMAX = [8,4, 99999, 'teste'];
console.log(gereNumeroAlaetorio(INTERVALO_NUMERO_MINEMAX));
console.log(gereNumeroAlaetorio());