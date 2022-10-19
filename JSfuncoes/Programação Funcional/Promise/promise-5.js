function esperarPor(tempo = 2000){
     return new Promise(function(resolve){
          setTimeout(() => {
               console.log('executando promise...');
               resolve();
          }, tempo);
     })
}
esperarPor()
     .then(() => esperarPor(2000))
     .then(() => esperarPor(2000))
     .then(() => esperarPor(2000))
     .then(() => esperarPor(2000))
     .then(() => esperarPor(2000))
//
setTimeout(function(){
     console.log("Hello")
     setTimeout(() => {
          console.log('OLÁ')
               setTimeout(() => {
                    console.log('OLÁ')                    
               },2000)
     },2000)
},2000)