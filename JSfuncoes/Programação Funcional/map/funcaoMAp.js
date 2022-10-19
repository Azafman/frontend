const nums = [1,2,3,4,5]
const dobro = n => n*2

//console.log(dobro(3))
//const nums2 = nums.map((n) => n*2)
const nums2 = nums.map(dobro)


console.log(nums, nums2)
const triploPosicaoindiceTamanhoarray = (n, i, a) => (n*3) + i + a.length;//n = elemento; i = posição do indice; a = tamanho do array
const somaElementoPosicaoTamarray = nums.map(triploPosicaoindiceTamanhoarray)
console.log(somaElementoPosicaoTamarray);
//aprendi que na declaração do map apenas passo a função como parametro e lá dentro ele invoca essa função e retorna o novo valor para o novo array 
//ao invés de declarar a função com o map, posso fazer em diferentes partes