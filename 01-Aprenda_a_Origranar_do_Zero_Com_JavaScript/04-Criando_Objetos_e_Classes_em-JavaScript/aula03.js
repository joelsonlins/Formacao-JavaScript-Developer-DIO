/*
1 -  Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso.
*/

class Carro {
  marca;
  cor;
  gasto_medio_combustivel;
  constructor(marca, cor, gasto_medio_combustivel) {
    this.marca = marca;
    this.cor = cor;
    this.gasto_medio_combustivel = gasto_medio_combustivel;
  }
  calcular_gasto_combustivel(quilometros, preco_combustivel) {
    return quilometros * preco_combustivel * this.gasto_medio_combustivel;
  }
}
const fiesta = new Carro ('Ford', 'Branco', 1/13)
console.log(fiesta)

console.log(fiesta.calcular_gasto_combustivel(100, 5.8).toFixed(2))