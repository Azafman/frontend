
let corpo = document.getElementsByTagName('section')[0]

corpo.innerHTML += '<br>'

function crie_tarefa() {
     let texto_input = document.querySelector('input#tarefa_id')
     
     if(texto_input.value.length == 0) {
          prompt('[Invalided] - Adicione uma tarefa primeiro!')
     }else{
          let checkbox = document.createElement('input')
          checkbox.type = 'checkbox' 
          corpo.appendChild(checkbox)
          corpo.innerHTML += texto_input.value + '<br>' 
     }
}