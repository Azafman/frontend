Se utilizar uma cláusula catch incondicional com uma ou mais cláusulas catch condicionais, o catch incondicional deve ser especificado por último. Caso contrário, o catch incondicional interceptará todos os tipos de exceção antes que eles alcancem os condicionais.

Nota: Essa funcionalidade não é parte da especificação ECMAScript.

try {
    myroutine(); // pode lançar três tipos de exceções
} catch (e if e instanceof TypeError) {
    // declarações para manipular exceções TypeError
} catch (e if e instanceof RangeError) {
    // declarações para manipular exceções RangeError
} catch (e if e instanceof EvalError) {
    // declarações para manipular exceções EvalError
} catch (e) {
    // declarações para manipular quaisquer exceções não especificadas
    logMyErrors(e); // passa o objeto de exceção para o manipulador de erro
}
// E aqui temos como implementar as mesmas "cláusulas catch condicionais" utilizando apenas JavaScript puro conforme a especificação ECMAScript (obviamente é mais verboso, porém, funciona em qualquer lugar):

try {
    myroutine(); // pode lançar três tipos de exceções
} catch (e) {
    if (e instanceof TypeError) {
        // declarações para manipular exceções TypeError
    } else if (e instanceof RangeError) {
        // declarações para manipular exceções RangeError
    } else if (e instanceof EvalError) {
        // declarações para manipular exceções EvalError
    } else {
       // declarações para manipular quaisquer exceções não especificadas
       logMyErrors(e); // passa o objeto de exceção para o manipulador de erro
    }
}

// Quando uma exceção é lançada no bloco try, exception_var (ex. o e dentro de catch (e)) armazena o valor especificado pela declaração throw. Você pode usar esse identificador para conseguir informação sobre a exceção que foi lançanda.

// Esse identificador é local para a cláusula catch. Ou seja, é criado quando a cláusula catch é introduzida e após terminar sua excecução o identificador não se torna mais disponível.