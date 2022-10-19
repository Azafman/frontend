let nomes = [
     'Mateus',
     'Azaf',
     'Martins',
     'Lima'
]
for(let cont in nomes) {
    console.log(nomes[cont].toUpperCase())
}
let nomeMyFather = {
    nome1: 'José ',
    nome2: 'Carlos ',
    nome3: 'FERREIRA ',
    nome4: 'LIMA'
}
console.log('The name of my father is ' + nomeMyFather.nome1 + nomeMyFather.nome2 + nomeMyFather.nome3 + nomeMyFather.nome4)
console.log('The name of my father in lowercase is ' + nomeMyFather.nome1.toLowerCase() + nomeMyFather.nome2.toLowerCase() + nomeMyFather.nome3.toLowerCase() + nomeMyFather.nome4.toLowerCase())
console.log(`Meu primeiro nome possuí ${nomes[0].length} letras, o meu pai porém possuí em seu primeiro nome ${nomeMyFather.nome1.length} letras.`)
console.log(!nomeMyFather.nome1.length == 5)
let condicion = nomeMyFather.nome1 == "José " ? 'First name is ok': "First name not's ok"
console.log(condicion)
console.log(new Date().getMinutes())