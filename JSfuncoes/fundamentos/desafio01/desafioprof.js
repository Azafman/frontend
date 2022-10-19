function range(a,b,s=1) {
    const n1 = b === undefined ? 1 : a // VALOR TERNÁRIO
    const n2 = b === undefined ? a : b
    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s)
    
    //MATH.ABS(VAR) SEMPRE RETORNARÁ VALOR POSITIVO
    //MATH.ABS(VAR) SEMPRE RETORNARÁ VALOR NEGATIVO
    
    const nums=[]
    for(let i = n1; n1 <= n2 ? i<=n2 : i>=n2; i+= step){
        nums.push(i)
    }
    return nums
}
console.log(range(1,19,8))