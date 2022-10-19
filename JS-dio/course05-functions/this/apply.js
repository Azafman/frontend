const myObj = {
     num1: 2,
     num2: 6
};

function soma(a,b) {//a==1;b==5
     console.log(this.num1 + this.num2 + a + b);
     console.log(this, a,b);
}

soma.apply(myObj,[1,5]);
// Está é a diferença de apply e call: apply-> os argumentos sãopassados em forma de Array; enquanto em call são passados normalmente separados por vírgula.