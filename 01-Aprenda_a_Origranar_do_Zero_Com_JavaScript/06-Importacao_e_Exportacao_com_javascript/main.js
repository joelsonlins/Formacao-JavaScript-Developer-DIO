// const funcoes = require("./funcoes-auxiliares");

// console.log(funcoes.gets());

// const pessoa = {
//   nome: "João",
// };

// const { nome } = pessoa;
// equivale;
// const nome = pessoa.nome;

const { gets, print } = require("./funcoes-auxiliares");
// require("./funcoes-auxiliares");

/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um númedo de 1 - 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23

Saída:
98
*/

// const numerosSorteados = [];
// for (let i = 0; i < 5; i++) {
//   const numerosSorteado = gets();
//   numerosSorteados.push(numerosSorteado);
// }
// let maiorValor = numerosSorteados[0]

// for(let i= 0; i <numerosSorteados.length; i++){
    
//     if (numerosSorteados[i]>maiorValor){
//         maiorValor = numerosSorteados[i]
//     }
// }
// // print(numerosSorteados);
// print(maiorValor)

//forma simplificada

const quantidadeDealunos = gets()
let maiorValor = 0

for (let i=0; i<quantidadeDealunos;i++){
    const numeroSorteado = gets();
    if (numeroSorteado>maiorValor){
        maiorValor = numeroSorteado
        }
}

print(maiorValor)

print(quantidadeDealunos)