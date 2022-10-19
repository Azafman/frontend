const pessoa = {
     firstName : 'André',
     lastName  : 'Soares',
     id        : 1,
     fullName  : function(){
          return this.firstName + ' ' + this.lastName;
     },
     getId     : function(){
          return this.id;
     },
     whatIsThis: function(){
          console.log(this)
     }

     //SEMRE QUE UMA FUNÇÃO ESTÁ DENTRO DE UM OBJETO, A CHAMAMOS DE MÉTODO
     // NESTECASO FULLNAME É UM MÉTODO,UMA FUNÇÃO;
};

pessoa.whatIsThis();//se refere ao objeto pai!

console.log(pessoa.fullName());


