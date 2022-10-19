let idades=[54,44,18,11]
var somaIdades = 0
idades.forEach(function(idade){
     somaIdades += idade
})
console.log(somaIdades)
for(let cont of idades) {
     console.log(cont)
}
console.log('---')
for(cont in idades){
     console.log(cont)
}
