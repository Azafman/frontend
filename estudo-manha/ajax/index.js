// Antes de promessas sempre se trabalhou assim:
const request = obj => {
     const xhr = new XMLHttpRequest();
     xhr.open(obj.method, obj.url);
     xhr.send();//como o método usado será o GET então .send() pode ser executado sem parametro, porém se o método fosse post, eu deveria especificar o parametro de .send().

     xhr.onreadystatechange = e => {
          if(xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) obj.sucess(xhr.responseText);
          else if(xhr.readyState === 4) obj.error(xhr.statusText);
     }
     /*
     - Lembrando que o GET faz uma requisição e recebe (.response) uma resposta (seja HTML, JSON, etc);
     - Já o POST envia informações que podem ser inseridas ou rejeitadas
     */
}
document.addEventListener('click', e => {
     const el = e.target;
     const tag = el.tagName.toLowerCase(); 
     // console.log(el, tag)  

     if(tag === 'a') {
          e.preventDefault();
          carregaPagina(el);
     }
});

const carregaPagina = elemento => {
     const href = elemento.getAttribute('href');  
     request({
          method: 'GET',
          url : href.toString(),
          sucess(conteudo) {
               document.querySelector('.insira-aqui').innerHTML += conteudo;
          },
          error(tipoErro) {   
               alert(tipoErro + ' - TENTE MAIS TARDE!');
          }
     });
}