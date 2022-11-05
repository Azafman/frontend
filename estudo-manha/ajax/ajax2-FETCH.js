document.addEventListener('click', e => {
     const el = e.target;
     const tag = el.tagName.toLowerCase(); 

     if(tag === 'a') {
          e.preventDefault();
          carregaPagina(el.toString().toLocaleLowerCase() + 'a');
     }
});
// fetch('url')
function carregaPagina(el) {
     fetch(el)
     .then(async html => {
          if(html.status !== 200) throw new Error(`ERROR ${html.status} NOSSO`);
          return html.text();
          // console.log(await html.text(), html);
     })
     .then( conteudo => document.querySelector('.insira-aqui').innerHTML += conteudo)
     .catch(console.warn);//captura o erro (error-> vermelho, log -> normal, warn -> amaraleo)
}
