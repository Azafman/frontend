var xhr = new XMLHttpRequest();
console.log(xhr);
//xhr.onreadystatechange -> quando mudar o estado do nosso objeto(quando xhr.readyState é alterado) o js executa essa função
/*
     xhr.readyState -> representa de forma número o estado atual da nossa requisição: 
     0: rerquisição não inicializada
     1: estabeleceu conexão com o servidor
     2: pedido recebido
     3: processando pedido
     4: solicitação concluída e resposta pronta

Documentação mdn possuí mais informações sobre: 
 - https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHTTPRequest#:~:text=XMLHttpRequest%20%C3%A9%20um%20objeto%20que,uma%20atualiza%C3%A7%C3%A3o%20de%20p%C3%A1gina%20inteira.
*/
/* xhr.open(method,url,bollean = true); -> open inicia a request; Um parâmetro booleano opcional, por padrão true , indicando se a operação (requisição) deve ou não ser executada de forma assíncrona. Se esse valor for false , o send() método não retorna até que a resposta seja recebida. Se true , a notificação de uma transação concluída é fornecida usando ouvintes de evento. Isso deve ser true se o multipart atributo for true , ou uma exceção será lançada.
*/
/*
xhr.send() -> send()
Envia a solicitação. Se o pedido é assíncrono (que é o padrão), este método retorna assim que o pedido for enviado. Se o pedido é síncrono, este método não retorna até a resposta chegar.
*/
/* 
const url = 'somePage.html'; //A local page

function load(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      callback(xhr.response);
      A propriedade retorna o conteúdo do corpo da resposta como um , a , a , um JavaScript ou uma string, dependendo do valor da propriedade da solicitação. XMLHttpRequest responseArrayBufferBlobDocumentObjectresponseType
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}
*/