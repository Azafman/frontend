const obj = { a: 1, b:2, c:3,soma(){ return a+b+c }}
console.log(JSON.stringify(obj))//json não suporta função, então ele ignora a função
//conversão de um objeto literal para JSON

console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
console.log(JSON.parse('{"nome":"Mateus AZAF", "idade":18,"trabalhando":false,"d":[],"e":{}}'))
// conersão de um JSON para um objeto 


// console.log(JSON.parse("{a:1,b:2,c:3}"))[ERRO!]
// console.log(JSON.parse("{'a':1,'b':2,'c':3}"))[ERRO!]
// console.log(JSON.parse("{"a":1,"b":2,"c":3}"))[ERRO!]
