/*existem duas formas de ler um arquivo:
com callback ->
sem callback -> forma sincrona(ele espera o meu código ser executado)*/
const path = require('path')
const fs = require('fs')

const caminho = path.join(__dirname,'dados.txt')
console.log(caminho)

function exibirConteudo(erro, conteudo){
     console.log(conteudo.toString());
}

fs.readFile(caminho, {}, exibirConteudo);
//read file abre o arquivo