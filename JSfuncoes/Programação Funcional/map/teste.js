const nome = ['Mateus','Azaf','Martins','Lima']

const firstLetra = nome.map(indice => indice[0])
console.log(firstLetra);

//ou
console.log(nome.map(el => el[0]));

//ou
let funcaoSeparaLetra = elemento => elemento.split(' ')
console.log(nome.map(funcaoSeparaLetra))