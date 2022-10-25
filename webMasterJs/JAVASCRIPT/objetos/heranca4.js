function MeuObjeto() {}
console.log(MeuObjeto.prototype, typeof MeuObjeto)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)//true
console.log(MeuObjeto.prototype === obj1.__proto__, obj1.__proto__ === Object.prototype)//true false
// .prototype -> aponta pro pai de uma função construtora
// .__proto__ -> aponta pro  pai de um objeto
//Ou seja quando eu uso uma função construtora e crio um objeto em cima dela, os objetos criados a partir dela tem a função MeuObjeto.prototype como pai! > !IMPORTANTE

MeuObjeto.prototype.nome = "anônimo";
MeuObjeto.prototype.falar = function() {
     // todo objeto instanciado apartir de MeuObjeto terá acesso à função falar
     console.log(`Bom dia! Meu nome é ${this.nome}`)
     //Se o obj construido tiver um atributo nome, então o this referenciará ele,caso contrário ira procurar no objeto pai
}

obj1.falar()
obj2.nome ='Azaf'
// o js irá procurar no escopo de obj2 o atributo nome, caso não ache ele irá para o pai. Neste caso (por ser uma instância de uma função construtora) o pai de obj2 é o NomeDaFunçãoConstrutora.prototype e não Object.prototype
obj2.falar()
const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()
