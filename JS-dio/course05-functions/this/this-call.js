const pessoa = {
     nome: 'Miguel',
};
const animal = {
     nome: 'Murphy'
};

function getSomething() {
     console.log(this.nome);
}

getSomething.call(animal);
getSomething.call(pessoa);
// getSomething.apply(pessoa);

///
const myObj = {
     num1: 2,
     num2: 6
};

function soma(a,b) {//a==1;b==5
     console.log(this.num1 + this.num2 + a + b);
     console.log(this, a,b)
}

soma.call(myObj,1,5);