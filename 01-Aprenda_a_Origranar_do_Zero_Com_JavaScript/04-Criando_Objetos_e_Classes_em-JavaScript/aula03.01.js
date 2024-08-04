/*
2 - Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso /(altura * altura))
Instancie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura e peça ao josé para dizerr o valor 
do seu IMC
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    this.imc = (peso / altura ** 2).toFixed(2);
  }
  classificarImc() {
    if (this.imc < 18.5) {
      return "Abaixo do peso";
    } else if (this.imc >= 18.5 && this.imc <= 24.9) {
      return "Peso normal";
    } else if (this.imc >= 25 && this.imc <= 29.9) {
      return "Sobrepeso";
    } else if (this.imc >= 30 && this.imc <= 34.9) {
      return "Obesidade grau I";
    } else if (this.imc >= 35 && this.imc <= 39.9) {
      return "Obesidade grau II";
    } else {
      return "Obesidade grau III";
    }
  }
  informa(){
    const classificacao = this.classificarImc();
    console.log(`O IMC de ${this.nome} é ${this.imc} e ele está com ${classificacao}.`)
  }
}

const jose = new Pessoa('José Lins', 93, 1.74);
// console.log(jose)
jose.informa();

