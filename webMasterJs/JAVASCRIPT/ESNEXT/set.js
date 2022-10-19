//não aceita repetição/nao indexada, se houver indices de valores iguais o Set exclui automaticamente.
//semelhante ao array
const times = new Set();
times.add('Vasco');
times.add('são Paulo').add('Corinthians').add('Palmeiras')
console.log(times);
console.log(times.size);//tamanho === me lembra o length
times.delete('Vasco')
console.log(times.has('Vasco'));//false
console.log(times);

const nomes = ['Raquel','Lucas','Julia','Lucas'];
const nomeSet = new Set(nomes);
console.log(nomeSet);//não aceita repetição
console.log(nomeSet.values())