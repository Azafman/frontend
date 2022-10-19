const nomes = ['Eduardo','Mateus','JJJJ'];
const novo = [...nomes]
delete nomes[1]
console.log(nomes);
//--- construcotr array 
const nomes2 = new Array('Uberlândia', 'Araxá', 'SP')
console.log(nomes2)
//
novo.pop()
console.log(novo);
//slice
const novo2 = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana']
console.log(novo2.slice(2), novo2.slice(-2));
// parametro de slice posivitivo = excluí as primeiras posições do array
// parametro de slice negativo = excluí todo o array, menos as posições de acordo com o número passado como parametro
console.log(novo2.slice(-4, -1));//não vai
console.log(novo2.slice(1))