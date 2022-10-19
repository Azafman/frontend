const palavras = ['oi','hello','word','Martins']
const maiorPalavra = palavras.reduce((maiorPalavra, palavraAtual) => {
     if(palavraAtual.length > maiorPalavra.length) return palavraAtual;
     return maiorPalavra;
}, '')
console.log(maiorPalavra)
const pokemons = [
     //transforma este array em um objeto que terá o tipos de pokemons como chave dos objetos e como valor um array com o objeto do pokemon que correspondeao tipo
     {
          name: 'Picachu',
          type: 'eletric'
     },
     {
          name: 'Squirtle',
          type: 'water'
     },
     {
          name: 'Magikarp',
          type: 'water'
     },
]
const obj = new Object;
console.log(pokemons.reduce((acc, el) => {
     acc[el.name] = el.type
     return acc
}, obj))





// console.log(pokemons[1].name);
// const pokemonsPorTipos = pokemons.reduce((pokemonsPorTipos, pokemonAtual) => {
//      pokemonsPorTipos[pokemonAtual.type] = pokemonsPorTipos[pokemonAtual.type] || [];
//      pokemonsPorTipos[pokemonAtual.type].push(pokemonAtual);

//      /*
//      obj.name = 'Azaf' ===   obj[name] = 'Azaf
//      */
//      return pokemonsPorTipos;
// }, {})
// console.log(pokemonsPorTipos)
