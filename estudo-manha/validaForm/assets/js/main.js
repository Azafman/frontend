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
    for(let errorText of this.formulario.querySelectorAll('.error-text')) {
      console.log(errorText);
      errorText.remove();
    }
   
    for(let campo of this.formulario.querySelectorAll('.validar')) {

      if(!campo.value) {
        let nomeCampo = campo.previousElementSibling.innerHTML;
        this.createError(campo, `${nomeCampo} não pode ficar em branco`);
        valid = false;
      }
    }
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