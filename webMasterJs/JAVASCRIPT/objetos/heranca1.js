const ferrari = { 
     modelo: 'F40',
     velMax: 324
 }

const volvo = {
     modelo: 'V40',
     velMax: 200
}
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
// qualquer objeto por pardrão, aponta para Object.prototype
//__proto__ -> protótipo
console.log(Object.prototype.__proto__ === null)//isso quer dizer que o object.prototype é o pai de todos ojetos e dps dele ñ tem + pai
//prototype só funciona para função

function meuObjeto(){}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)
