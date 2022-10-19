function Constructing(){}
const obj1 = new Constructing
Constructing.prototype.adrress = 'Rua ABC,2312'
obj1.falarEndereco = function(){
     console.log(this.adrress)
}
obj1.falarEndereco()