let aniversarios=[]

for(let cont=0; cont<=3; cont++) {
     if(cont==0) {
          aniversarios.push('27/10')
     }else if (cont==1){
          aniversarios.push('30/10')
     }else if(cont==2) {
          aniversarios.push('21/09')
     }else {
          aniversarios.push('26/06')
     }     
}
console.log(aniversarios);
aniversarios.pop();//remove o último item do array
console.log(aniversarios);
aniversarios.shift();//remove o primeiro item do array
console.log(aniversarios);
aniversarios.unshift('27/10');//adiciona  um item no primeiro array
console.log(aniversarios);
console.log('Meu aniversário está na posição: ' + aniversarios.indexOf('21/09'));
aniversarios.forEach(element => {
     element = `Tem aniversário em ${element}`;
     console.log(element);
});
console.log(aniversarios);
let niv = aniversarios.slice(0,2)
aniversarios.splice(1,2)//(start,end) -> exclui tudo entre esses indices
console.log(niv)
console.log(aniversarios);