// get e set para maior nível de encapsulamento

//função  get -> lÊ o valorde uma variável
//função set -> altera o valor de uma variável
const sequencia = {
     _valor: 100, //convenção, ou seja eu poderia mudar o valor usando sequencia._valor, porém quero evitar isso
     get outPutValor(){ return this._valor },
     get valor() { return this._valor++ },
     set valor(valor) {
          //mesma função comargumentos !=, só neste caso js aceita isso
          this._valor = valor
     }
}
sequencia.valor;
console.log(
     sequencia.outPutValor,//101
);
sequencia.valor = 300//assim acesso a função set valor;300 => é o parametro (valor)
console.log(sequencia.outPutValor)//300
sequencia.valor;
console.log(
     sequencia.outPutValor,//301
);