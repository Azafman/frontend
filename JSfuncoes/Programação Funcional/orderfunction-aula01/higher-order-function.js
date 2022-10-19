function run(fn){
    fn()
}
run(Digaola)
function Digaola() {
    console.log("Olá")
}
run(function(){
    //imagine que esta função tem um nome, e ele vai  passar o nome da função e isso que importa
    console.log("Vê ai!")
})//por enquanto o que importa saber, é que fn == essa function anônima; de alguma forma...

