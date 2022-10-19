const estudante = {
     _nome: 'Mateus',
     get getNameStudent(){
          return this._nome;
     },

     set mudarNome(newName){
          this._nome = newName
     }
}
console.log('Nome atual: ', estudante.getNameStudent)
estudante.mudarNome = 'Azaf'// 'Azaf' vira o parametro de mudarNome
console.log('Novo nome : ', estudante.getNameStudent)
