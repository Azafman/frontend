const [ac] = [4,3,1];
console.log(ac)
let arrayOfOj = [{
     nome: 'lima',
     bairro: 'morumi',
     localidade: {
          nacao: 'Brasil',
          estado: 'minas-gerais',
          city: 'Uberlândia'
     }
},18]
const [ac2, idade, profissao = 'desenolvedor fullstack', empregado] = arrayOfOj;
console.log(ac2, idade, profissao, empregado);
//a dsestruturação é feita por indic, não por notção onto como em objeto -> olhe os arquivos destructing.DIO!


const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]//NÃO É REOMENDADO USAR ESSE TIPO DE CÓDIGO
console.log(nota)