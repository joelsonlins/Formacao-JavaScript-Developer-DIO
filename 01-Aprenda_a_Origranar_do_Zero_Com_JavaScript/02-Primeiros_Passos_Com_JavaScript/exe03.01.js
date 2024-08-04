/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/
const prompt = require('prompt-sync')({sigint: true});

let nota01 = parseFloat(prompt("Digite a primeira nota: "))
let nota02 = parseFloat(prompt("Digite a segunda nota: "))
let nota03 = parseFloat(prompt("Digite a terceira nota: "))

let media = (nota01 + nota02 + nota03)/3;

console.log(media)

if (media<5){
    console.log("Reprovado");
}else if(media>=5 && media<=7){
    console.log("Recuperação");
}else if (media>7){
    console.log("Aprovado");
};
