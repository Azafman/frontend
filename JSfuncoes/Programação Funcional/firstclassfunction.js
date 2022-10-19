//QUANDO EM UMA LINGUAGEM AS FUNÇÕES PODEM ASSUMIR DIFERENTS VALORES, DOU O NOMEDE FIRDT CLASS FUNCTION
//Entenda que uma linguagem de programação tem classe quando suas funções são tratadas como qualquer outra variável. Por exemplo, numa linguagem desse tipo, a função pode ser passada como argumento para outras funções, ser retornada por outra função e pode ser atribuída como um valor à uma variável.

let num = (num) => {
    let cont=0
    do{
        cont++
        console.log(`${cont} X ${num} = ${cont*num}`)        
    }while(cont<=9)
}
num(2)
//posso chamar a função, sem parametro!