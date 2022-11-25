const path = require('path'); 

module.exports = {
     //a configuração do webpack ocorre aqui
     mode: 'development',//não diminui o tamanhodo código
     entry: './src/index.js',//o arquivo com o código "moderno"
     output: {
          // path: path.resolve(__dirname,'public') -> ele pega o caminho atual, concatena com a pasta pulic. ex: ./webpack/public/
          // por convenção a pasta public armazena tudo o que o usuário utiliza
          path: path.resolve(__dirname, 'public', 'assets','js'), 
          //endereço
          filename: 'bundle.js'
          //qual arquivo ele vai criar, com o código antigo
     },
     module: {},
     devtool: 'source-map'//qnd ocorrer algum erro no bundle.js(que pode ser a junção de vários arquivos), ele vai mapear e mostrar especificamente onde está o erro, nos arquivos de códigos "modernos"
}