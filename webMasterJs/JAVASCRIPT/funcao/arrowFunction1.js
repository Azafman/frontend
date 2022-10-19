//neste caso por ser usada arrow function, o this da função anônima vira fixo e se refere ao objeto geral/pai, que é o module.exports  
function pessoa(){
     this.idade = 0;
     console.log(this === globalThis);//true
     
     setInterval(() => {
          console.log(this === globalThis);//true
          // globalThis.setInterval() -> por isso: relembrando o this da arrow function é refente aonde foi declarado, e neste caso a arrow function foi declarada dentri da função setInterval, função normal. Então o this da arrow function passa a ser o globalThis
           this.idade++
           console.log(this.idade);
      },1000)
}
pessoa()