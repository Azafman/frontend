//Depois das promessas: 
document.addEventListener('click', e => {
     const el = e.target;
     const tag = el.tagName.toLowerCase(); 

     if(tag === 'a') {
          e.preventDefault();
          carregaPagina(el);
     }
});
const request = obj => {
     const xhr = new XMLHttpRequest();
     xhr.open(obj.method, obj.url);
     xhr.send();

     return new Promise((resolve, reject) => {
          xhr.onreadystatechange = e => {
               if(xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) resolve(xhr.responseText);
               else if(xhr.readyState === 4) reject(xhr.statusText);
          }
     })
}
const carregaPagina = async (elemento) => {
     const href = elemento.getAttribute('href');  //remova e coloque o 'a'
     
     request({
          method: 'GET',
          url : href.toString(),
     }).then(sucess).catch(error);
     // Usando promise o código fica mais limpo, imagina se eu fosse tratar os erros, iria ficam uma callback dentro da outra e assim sucessivamente. Com Promise as coisas melhoram e muito
}
const sucess = conteudo => document.querySelector('.insira-aqui').innerHTML += conteudo;
const error = tipoErro => {
     alert(tipoErro + ' - TENTE MAIS TARDE!');
     location.reload();
}