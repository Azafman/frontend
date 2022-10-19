const minhaCidade = {
     
}
Object.defineProperty(
     minhaCidade,
     'estado', {
          enumerable: true,
          writable: false,
          value: 'Minas Gerais'
     }
);
Object.defineProperty(
     minhaCidade,
     'numeroDeHabitantes', {
          enumerable: true,
          writable: false,
          value: 800000
     }
);
console.log(minhaCidade);
console.log(Object.keys(minhaCidade))
console.log(Object.values(minhaCidade))
console.log(Object.entries(minhaCidade))
Object.entries(minhaCidade).forEach(el => {
     console.log(`${el[0]}: ${el[1]}`)
})
