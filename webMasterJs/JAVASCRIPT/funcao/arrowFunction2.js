let comparaComThis = function (param) {
     console.log(this === param)
}
const obj = {};

comparaComThis(globalThis)//true
comparaComThis = comparaComThis.bind(obj);//aqui estouforçando o obj ser o this
comparaComThis(globalThis)//false
comparaComThis(obj)

// função normal o this aponta pro globalThis;
// função arrow o this aponta pro contexto léxico em que foi inscrito

let comparaComThisArrow = param => console.log('Arrow: ' + this === param)
comparaComThisArrow(globalThis);
comparaComThisArrow(module.exports);// o this aqui é o objeto "pai local", e é fixo

comparaComThisArrow = comparaComThisArrow.bind(obj);//mesmo tentando forçar não é possível mudar o this de uma arrow Function
comparaComThisArrow(obj)
comparaComThisArrow(module.exports);