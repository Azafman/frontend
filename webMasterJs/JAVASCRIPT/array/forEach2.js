Array.prototype.leiaArray = function(fn){
     for(let cont = 0; cont < this.length; cont++){
          fn(this[cont], cont, this.length)
     }
}
const alunosAprovados = ['Azaf','Gesmiel','Victor','Daniel']
alunosAprovados.leiaArray(function(el, indx, array){
     console.log(indx+1,': '+ el)
})