
let dayOfBirthDay = ['27/10','30/10','21/09','28/06','21/10'];

escrevaData(dayOfBirthDay)
escrevaData(...dayOfBirthDay)//neste caso ele pega o array e transforma cada posição em uma 'variável'

function escrevaData(data1, data2) {
     // console.log(Array.isArray(n))
     console.log(data1, data2);//['27/10','30/10','21/09','28/06','21/10'];
}