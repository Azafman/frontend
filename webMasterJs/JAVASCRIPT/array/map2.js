const carrinho = [
     '{"nome":"borracha","preco": 3.45}',
     '{"nome":"Caderno","preco": 13.90}',
     '{"nome":"Kit de Lápis","preco": 41.22}',
     '{"nome":"Caneta","preco": 7.50}',
]
const convertaParaObj = el => JSON.parse(el)
const getPreco = el => el.preco
const carrinho2 = carrinho
                         .map(convertaParaObj)
                         .map(getPreco)
console.log(carrinho2);