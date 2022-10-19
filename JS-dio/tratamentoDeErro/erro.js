function tratarErrorELancar(erro){
     // // throw `A propiedade "name" não existe!
     // // E sim a propriedade ${Object.keys(obj)}`;
     // throw new Error (`A propiedade "name" não existe!
     // E sim a propriedade ${Object.keys(obj)}`);
     //new error cria uma mensagem personalizada
     let obj = {
          tempoErro() {
               let time = new Date();
               let hours = time.getHours();
               let minutes = time.getMinutes();
               let seconds = time.getSeconds();
               let day = time.getDate();
               let month = time.getMonth();
               return `Seu erro foi regitsrado em nosso sistema! As ${hours}:${minutes} e ${seconds} segundos, em ${day}/0${month}/2022`
           }
     }
     console.log(obj.tempoErro() + ". " + erro.name + erro.message);
}

function imprimirNomeGritado(objeto){
     //try -> É como se fosse uma isca, e que se ocorrer algum erro no bloco de código dele, ele irá encaminhar pro catch
     try {
          console.log(objeto.nom.toUpperCase() + '!!!');
     } catch(e) {
          tratarErrorELancar(e);
          //console.log(e + ' INVÁLIDO')
     } finally {
          //INDEPENDENTE SE TIVER ERRO OU NÃO
          console.log("FINAL!");
     }
}
const obj = {
     nome: 'Roberto'
}

imprimirNomeGritado(obj);
