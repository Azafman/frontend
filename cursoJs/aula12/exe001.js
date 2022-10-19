var id=18
/*
if(id<16){
    console.log('Não Vota')
} else{
    if(id<18){
        console.log('Voto opcional')
    } 
    else{
        console.log('Voto obrigatório')
    }
}*/
if(id>65 || id<18 && id>=16){
    console.log('O voto é opcional')
}
else if(id>=18 && id<=65){
    console.log("Voto obrigatório")
}
else if(id<16){
    console.log('Não vota!')
}
