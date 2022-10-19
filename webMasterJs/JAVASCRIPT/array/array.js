console.log(typeof Array, typeof new Array, typeof [])
let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados)
console.log(aprovados[0])
aprovados.push("Azaf")
aprovados.sort()
console.log(aprovados)
delete aprovados[0]
console.log(aprovados)

let professores = ['Bia','Carla','Anaa']
professores.splice(2,1,'Azaf')
console.log(professores)
professores.splice(0,2,'Mateus')//a partir do elemento 0, eu vou excluir dois indices, adicionar mateus ao primeiro indice depois destes,e comlementar com Azaf
console.log(professores)