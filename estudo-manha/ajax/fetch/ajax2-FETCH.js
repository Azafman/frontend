document.addEventListener('click', e => {
     const el = e.target;
     const tag = el.tagName.toLowerCase(); 

     if(tag === 'a') {
          e.preventDefault();
          carregaPagina(el.toString().toLocaleLowerCase());
     }
});
function carregaPagina(el) {
     //o 1° then só será acessado quando a requisição estiver concluída ready. Como sef fosse xhr.readyState === 4.O parametro de then é o objeto da requisição. Como se fosse xmlhttprequest() concluída, com as informações da requisição.
     fetch(el)
     .then(async html => {
          if(html.status !== 200) throw new Error(`ERROR ${html.status} NOSSO`);
          //lembre-se que o throw funciona como return da função
          return html.text();
          //html é o objeto === xmlhttpRequest();
          //text === .responseText();
          // console.log(await html.text(), html);
     })
     .then( conteudo => document.querySelector('.insira-aqui').innerHTML += conteudo)
     .catch(console.warn);//captura o erro (error-> vermelho, log -> normal, warn -> amaraleo)
}
