/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/
const prompt = require('prompt-sync')({sigint: true});

let distancia = prompt("Qual a distância que deseja percorrer em 'KM'? ");
let gasolina = prompt("Digite o valor do litro da gasolina: ");
let gastoPorKM = prompt("Quantos km o seu veiculo faz com 1L de gasolina? ");

let valorPago;
valorPago = (distancia/gastoPorKM)*gasolina;
console.log("O valor que você pagará será de: R$" + valorPago);