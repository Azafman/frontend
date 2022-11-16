const fields = document.querySelectorAll("[required]");
for(let field of fields) {
    field.addEventListener('invalid', customValidation);//o evento passa como parametro por padrão aqui
}

function customValidation(e) {
     //e.target retorna o elemento em que o evento ocorreu
     const el = e.target;
     // console.log(el.validity);
     // el.setCustomValidity()//troca a mensagem de required -> toda vez que eu seto uma nova mensagem o customError passa a ser true;

     function verifyErrors() {
          let foundError = false;

          for(let error in el.validity) {
               if(error !== "customError" && el.validity[error]) {
               //existe uma prorpriedade (el.validity.valueMissing -> tem valor faltando ?), caso a caixa de texto não tenha nenhum valor o seu retorno será true, caso tenha valor seu retorno será false;
                    foundError = el.validity[error];
               }
          }
          return foundError;
     }
     const erro = verifyErrors()
     console.log("Error exists:", erro);
     
     if(erro) {
          el.setCustomValidity("Esse Campo é obrigatório");
     } else {
          el.setCustomValidity("");
     }

}

document.querySelector('form').addEventListener('submit', (e) => {
     e.preventDefault();
})

// const obj = {
//      nome:'azaf', idade: 18
// }
// for(let a in obj) {
//      console.log(a, obj[a])
//      //a=== chave
//      //obj[a] === value
// }