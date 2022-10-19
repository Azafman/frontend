function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)//true
console.log(MeuObjeto.prototype === obj1.__proto__)//true
// .prototype -> aponta pro pai de uma função
// .__proto__ -> aponta pro  pai de um objeto
//Ou seja quando eu uso uma função construtora e crio um objeto em cima dela, os objetos criados a partir dela tem a função MeuObjeto.prototype como pai!

MeuObjeto.prototype.nome = "anônimo";
MeuObjeto.prototype.falar = function() {
     console.log(`Bom dia! Meu nome é ${this.nome}`)
     //Se o obj construido tiver um atributo nome, então o this referenciará ele,caso contrário ira procurar no objeto pai
}

obj1.falar()
obj2.nome ='Azaf'
obj2.falar()
const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()
