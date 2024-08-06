/*
Faça um programa que receba a média de um aluno.
caso a média seja < 5 imprima 'Reprovado'
caso a média seja >= 5 e < 7 imprima 'Recuperação'
caso a média seja >= 7 imprima 'Aprovado'
*/
const { gets, print } = require("./funcoes-auxiliares");

let media = gets();
if (media < 5) {
  print("Reprovado");
} else if (media >= 5 && media < 7) {
  print("Recuperação");
} else {
  print("Aprovado");
}