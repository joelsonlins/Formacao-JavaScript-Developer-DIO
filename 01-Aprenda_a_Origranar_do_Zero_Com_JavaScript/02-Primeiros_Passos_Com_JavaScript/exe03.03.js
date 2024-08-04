/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto,
considerando o preço normal de etiqueta e a escolha a condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento 
escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const prompt = require('prompt-sync')({sigint: true});

let valorFinal;

let preco = parseFloat(prompt("Qual o preço do produto escolhido? "))
console.log("")
console.log("Formas de pagamento; ")
console.log("[1] - À vista no Débito, 10% de desconto.")
console.log("[2] - Á vista no Dinheiro ou PIX, 15% de desconto.")
console.log("[3] - Parcelado em 2 vezes, preço normal de etiqueta sem juros. ")
console.log("[4] - Acima de 2 vezes, juros de 10%")
let pagamento = parseInt(prompt("Qual forma de pagamento deseja escolher ? "));

if (pagamento ==1){
    valorFinal = preco - (preco * 0.10);
}else if(pagamento === 2){
    valorFinal = preco - (preco * 0.15);
}else if (pagamento === 3){
    valorFinal = preco ;
}else{
    valorFinal = preco + (preco * 0.10);
}
console.log("O valor final do produto é: R$" + valorFinal.toFixed(2));