class Avo {
     constructor(sobrenome) {
          this.sobrenome = sobrenome
     }
}

class Pai extends Avo { 
     // avo é o pai de Pai
     constructor(sobrenome, profissao = 'Professor') {
          super(sobrenome)
          this.profissao = profissao
     }
}

class Filho extends Pai {
     constructor() {
          super('Silva')
     }
}
const filho = new Filho
console.log(filho)
