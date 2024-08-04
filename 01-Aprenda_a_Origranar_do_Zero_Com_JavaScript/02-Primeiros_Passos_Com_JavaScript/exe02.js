/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/
const prompt = require('prompt-sync')({sigint: true});

let etanol;
let gasolina;
let distancia;
let gastoPorKM;
let valorPago;

combustivel = parseInt(prompt("Qual o tipo de combustível no seu carro? [1] - Gasolina ou  [2] - Etanol: "));

if (combustivel === 1) {
    gasolina = parseFloat(prompt("Qual o preço do litro de gasolina? R$"));
    distancia = parseFloat(prompt("Qual a distância da viagem em 'KM' ? "));
    gastoPorKM = parseInt(prompt("Qual o gasto médio de combustível do veículo? "));
    valorPago = (distancia/gastoPorKM)*gasolina;
    console.log("O valor que você pagará será de gasolina será: R$" + valorPago);
} else {
    etanol = parseFloat(prompt("Qual o preço do litro de etanol? R$"));
    distancia = parseFloat(prompt("Qual a distância da viagem em 'km' ? "));
    gastoPorKM = parseInt(prompt("Qual o gasto médio de combustível do veículo? "));
    valorPago = (distancia/gastoPorKM)*etanol;
    console.log("O valor que você pagará será de etanol será: R$" + valorPago);
};

