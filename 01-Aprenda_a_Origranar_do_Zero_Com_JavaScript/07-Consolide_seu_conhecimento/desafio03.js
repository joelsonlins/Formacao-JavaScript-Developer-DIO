/*
Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios
O salario a ser transferido é calculado da seguinte maneira:

valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos beneficios

Para calcular o valorImpostos, seguem as aliquotas (baseadas no valor do salário bruto):

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$ 2500.00 = 15.00%
*/
const { gets, print } = require("./funcoes-auxiliares");

const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

function calcularImposto(salario) {
    let aliquota;
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;
    }else if(salario>1100 && salario <=2500){
      aliquota = 0.1;
    }else{
      aliquota = 0.15;
    }
    return aliquota * salario;
}





const valorImposto = calcularImposto(valorSalario);
const saida = valorSalario - valorImposto + valorBeneficios;
print(saida.toFixed(2));