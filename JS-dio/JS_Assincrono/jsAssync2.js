async function resolvePromise() {
     const myPromise = new Promise((resolve, reject) => {
          window.setTimeout(() => {
               resolve("resolvida 2 ")
          }, 7000)
     })

     let result;
     
     try {
          result = await mPromise
                         .then((result) => result + ' passando pelo then')
                         .then((result) => result + ' e agora acabou!')
     } catch (e) {
          result = e.message;
     }
     return result 
}

resolvePromise()
.then(console.log)

