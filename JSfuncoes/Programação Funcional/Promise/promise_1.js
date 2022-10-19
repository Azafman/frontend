function jaRealizada(){
     return Promise.resolve('Hello');
}
function jaRejeitada(){
     return Promise.reject('ERROR]]');
}
jaRealizada().then(function(data){
     console.log('Promise aprovada', data)
})
jaRejeitada().catch(function(e){
     console.log('Rejeitada'+e)
})

function promiseTrabalhada(){
     return new Promise(function(resolve,rejet){
          resolve('oláprogramador');
     })
}
promiseTrabalhada().then(function(message){
     console.log(message)
})