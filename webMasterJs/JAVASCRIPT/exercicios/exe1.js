// exe01
const sayHello = namep => 'HELLO! '.concat(namep)
console.log(sayHello('Azaf'))
//exe02
const idadeEmDias = idade => idade*365
console.log(idadeEmDias(18) + ' Dias de Vida')
// exe03
const salarioMensal = (horasTrabalhadas, valorHora) => horasTrabalhadas*valorHora
console.log(`Salário igual a R$ ${salarioMensal(150, 40.5).toFixed(2).replace('.',',')}`)
// exe04
const mesCorrespondente = numero => {
     if(numero >=1  && numero <= 12) {
          switch (numero) {
               case 1:
                    return 'Janeiro';
                    break
                    case 2:
                         return 'Fevereiro';
                    break
               case 3:
                    return 'Março';
                    break
               case 4:
                    return 'Abril';
                    break
               case 5:
                    return 'Maio';
                    break
               case 6:
                    return 'Junho';
                    break
               case 7:
                    return 'Julho';
                    break
               case 8:
                    return 'Agosto';
                    break
                    case 9:
                         return 'Setembro';
                         break
                         case 10:
                              return 'Outubro';
                              break
                              case 11:
                                   return 'Novembro';
                    break
               case 12:
                    return 'Dezembro';
                    break
               }
     } else {
          return 'Digite um número entre 1 a 12'
     }
}
console.log(mesCorrespondente(15))
