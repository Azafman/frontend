// function pessoa(){
//      this.idade = 0;

//      setInterval(function(){
//           this.idade++
//           console.log(this.idade);
          //o this de SetInterval() é diferente do this de pessoa()!
//      },1000)
// }
// pessoa()
function pessoa(){
     this.idade = 0;

     setInterval(function(){
          this.idade++
          console.log(this.idade);
     }.bind(this),1000)//nesta linha estou declarando que o this de setInterval vai ser o mesmo de seu "pai" === pessoa()
}
pessoa()

function pessoa(){
     this.idade = 0;
     
     const self = this
     setInterval(function(){
          self.idade++
          console.log(self.idade);
     },1000)
}
pessoa()
