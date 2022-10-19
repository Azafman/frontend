async function resolvaPromise() {
     const myPromise = new Promise((resolve, reject) => {
          window.setTimeout(() => {
               resolve('Resolvida')
          }, 3000)
     })
     const resolved = await myPromise
          .then(result => {
               console.log(result)
               return result;
          })
          .then((result) => result + ' passando pelo then')
          .then((result) => result + ' e agora acabou!')
          .catch((err) => console.log(err.message))
     
     return resolved;
}
resolvaPromise()
.then(console.log)
// !=
console.log(resolvaPromise())//1° a ser executado