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
    
    if(camposValidos) {
      this.formulario.submit();    
      console.log('Formulário enviado.');
      return;
    }
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
        if(!this.validaCPF(campo)) valid = false;
        // se a função retorna false, sua negação será true e por consequência valid receberá false
      }
      if(campo.classList.contains('usuario')) {
        if(!this.validityUser(campo)) valid = false;
        // se a função retorna false, sua negação será true e por consequência valid receberá false
      }
      if(campo.classList.contains('senha')) {
        if(!this.validatyPassoword(campo)) valid = false;
      }
      if(campo.classList.contains('repetir-senha')) {
        if(!this.validatyPassoword(campo, 'repetir')) valid = false;
      }
    }
    return valid;
  }
  validatyPassoword(campo, repete) {
    let valid = true;
    if(campo.value.length === 0 ) return valid;
    if(campo.value.length < 6 || campo.value.length > 12) {
      this.createError(campo, 'O campo senha deve conter entre 6 à 12 caracteres');
      valid = false;
    }
    if(repete) {
      if(!this.samePassword(campo)) valid = false;
    }
    
    return valid;
  }
  samePassword(campo) {
    if(document.querySelector('.senha').value === campo.value) return true;
    
    this.createError(campo, 'Senha e repetir senha devem ser iguais.');
    this.createError(this.formulario.querySelector('.senha'), 'Senha e repetir senha devem ser iguais.');
    return false;

  }
  
  validityUser(campo) {
    let valid = true;
    if(campo.value.length === 0 ) return valid;
    if(campo.value.length < 3 || campo.value.length > 12) {
      this.createError(campo, 'O campo usuário deve conter entre 3 à 12 caracteres');
      valid = false;
    }
    if(!campo.value.match(/^[a-zA-Z0-9]+$/g)) {
      //se o campo.value tiver somente letras e números retornará true, caso contrário retornará false. 
      // se a função retorna false, sua negação será true e por consequência entrará executrá as intruções lhe delegadas.
      this.createError(campo, 'Usuário deve conter somente letras e/ou números');
      valid = false;
    }

    return valid;
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

  }
}

const form = new ValidaForm();