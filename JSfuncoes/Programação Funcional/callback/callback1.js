const exec = (fn, n1, n2) => {
     if(typeof fn == 'function') {
          return fn(n1, n2);
     }
     else {
          return 'Passe uma função válida!';
     }
}
const somarNoTerminal = (n1, n2) => n1+n2;
const subtrairNoTerminal = (n1, n2) => n1-n2;


console.log(exec(somarNoTerminal, 56, 38));
console.log(exec(subtrairNoTerminal, 182, 27));