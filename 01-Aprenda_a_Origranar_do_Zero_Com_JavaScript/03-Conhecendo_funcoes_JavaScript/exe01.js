const prompt = require('prompt-sync')({sigint: true});

function sayName(name){
    console.log("Meu nome é: "+name)
}
sayName("Joelson")

function quadrado(valor){
    return valor*valor;
}

let resultado = quadrado(9)
console.log(quadrado(5))
console.log(resultado)