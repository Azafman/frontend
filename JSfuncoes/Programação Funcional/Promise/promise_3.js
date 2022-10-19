let p = new Promise(function(resolve,reject){
     resolve({nome1: 'AZAF', nome2: 'Lima', nome3: 'Martins'})
});
console.log(p);
setTimeout(()=>console.log('testeteste'),0)
     p
     .then(array => array.nome1)
     .then(firstName => firstName[0].toLowerCase())
     .then(console.log)
console.log('Azaf')
//execute o código e preste em atenção na ordem do código e do OUTPUT
//existe uma ordem de execução primeiro executo o código normal, depois promessas e depois funções assícronas