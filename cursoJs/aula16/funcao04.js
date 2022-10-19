function fat(num){
    let f = 1
    for(let cont=num;cont>1;cont--){
        f *= cont
    }
    return f
}
console.log(fat(5))