let num = [3,0,4,1,3,8,9]
/*for(var cont=0;cont<=num.length;cont++){
    console.log(num[cont])
}*/
let num1 = [4,5,2]
for(let cont in num1){
    console.log(num1[cont])
}
num1.push(0)
let confere = num1.indexOf(0)

if(confere == -1){
    console.log('Não existe nenhum 0 no array num1!')
}else{
    console.log(`O valor zero está na posição ${num1.indexOf(0)}`)
}