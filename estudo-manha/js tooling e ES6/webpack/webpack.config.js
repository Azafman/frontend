const path = require('path'); 

module.exports = {
     //a configuração do webpack ocorre aqui
     mode: 'production',//não diminui o tamanhodo código('development'). ou 'production' que encurta o código. tira comentários, quebras de linhas, etc.
     entry: './src/index.js',//o arquivo com o código "moderno"
     output: {
          // path: path.resolve(__dirname,'public') -> ele pega o caminho atual, concatena com a pasta pulic. ex: ./webpack/public/
          // por convenção a pasta public armazena tudo o que o usuário utiliza
          path: path.resolve(__dirname, 'public', 'assets','js'), 
          //endereço
          filename: 'bundle.js'
          //qual arquivo ele vai criar, com o código antigo
     },   
     module: {
          rules: [
               {
                    exclude: /node_modules/,
                    test: /\.js$/,
                    use: {
                         loader: 'babel-loader',
                         options: {
                              presets: ['@babel/env']
                         }
                    }
               }
               //será somente um objeto pelo fato de estarmos tralhando somente com js; porém se usarmos sass e png por exemplo, serão 3 objetos
          ]
     },
     devtool: 'source-map'//qnd ocorrer algum erro no bundle.js(que pode ser a junção de vários arquivos), ele vai mapear e mostrar especificamente onde está o erro, nos arquivos de códigos "modernos". Exemplo: index.js:3
     //gera o budle.js.map
}