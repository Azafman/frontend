//A PARTIR DE FUNÇÕES EU CRIO OBJETOS
function Carro(fabricante,modelo, ano){
     this.fabricante = fabricante
     this.modelo = modelo
     this.ano = modelo
     // o this se refere ao (new Carro) !
}
const newCar = Carro('Volksvagem',2018,2019)
const newCar2 = new Carro('Volksvagem',2018,2019)
// new(objeto) + Carro (função) === eu consigo criar um objeto manipulando o com uma função!
const camaro = new Carro('Chevrolet','MEO39QG1!=1',102)
console.log(newCar, newCar2, camaro);