
class ValidaForm {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }


  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.isValid();
    
    console.log('Formulário não enviado !');
  }


  isValid() {
    let valid = true;

    //se tem alguma mensagem de erro remove a mesma
    for(let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for(let campo of this.formulario.querySelectorAll('.validar')) {
      let nomeCampo = campo.previousElementSibling.innerHTML;

      if(!campo.value) {
        this.createError(campo, `${nomeCampo} não pode ficar em branco`);
        valid = false;
      }
      if(campo.classList.contains("cpf")) {
        if(this.validaCPF(campo)) valid = false;
      }
      if(campo.classList.contains('usuario')) {
        this.validityUser(campo, nomeCampo);
      }


    }
  }



  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if(!cpf.valida()) {
      this.createError(campo, 'CPF INVÁLIDO!');
      return false;
    }
    return true;
  }
  
  createError(campo , msg) {
    const divElement = document.createElement('div');
    divElement.innerHTML = msg; 
    divElement.classList.add('error-text');
    campo.insertAdjacentElement('afterend', divElement);

    /*
    Element.insertAdjacentElement()
    - O insertAdjacentElement()método da Element interface insere um determinado nó de elemento em uma determinada posição em relação ao elemento sobre o qual é invocado.
    position
    Uma string representando a posição relativa ao targetElement; deve corresponder (sem distinção entre maiúsculas e     minúsculas) uma das seguintes strings:

    'beforebegin': Antes do targetElementpróprio.
    'afterbegin': Logo dentro do targetElement, antes de seu primeiro filho.
    'beforeend': Apenas dentro do targetElement, após seu último filho.
    'afterend': Após o targetElementpróprio
    */

  }
}

const form = new ValidaForm();