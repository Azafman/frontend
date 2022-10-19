function classificacaoTriangulo (x, y, z) {
     if(x === y === z){
          this.classificacaoGeral = 'Equilátero'
     }else if(x != y != z){
          this.classificacaoGeral = 'Escaleno'          
     }else {
          this.classificacaoGeral = 'Isóceles'                    
     }
     
     this.primeiroLado = x
     this.segundoLado = y
     this.terceiroLado = z
     
     this.mostrarResultado = function(){
          console.log('Seu triângulo é: ' + this.classificacaoGeral);
          console.log(`1° Lado: ${this.primeiroLado}\n2° Lado: ${this.segundoLado}\n3° Lado: ${this.terceiroLado}`)
     }
}
const triangulo1 = new classificacaoTriangulo(3,2,9)
const triangulo2 = new classificacaoTriangulo(3,2,2)
const triangulo3 = new classificacaoTriangulo(9,9,9)

triangulo1.mostrarResultado()
triangulo2.mostrarResultado()
triangulo3.mostrarResultado()
