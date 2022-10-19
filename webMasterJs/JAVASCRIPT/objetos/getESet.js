var _v = 0;
var obj = {
     get v() {
          console.log('teste')
          return _v;
          //pq aqui ninguém pode sobrescrever o valor do returno
          //só consigo fazer leitura
     },
     set v(value) {
           _v = value * 2;
     }
}

// console.log(obj.v()) [erro]
obj.v = 2 //2 vira parametro da funcao set v
console.log(obj.v)