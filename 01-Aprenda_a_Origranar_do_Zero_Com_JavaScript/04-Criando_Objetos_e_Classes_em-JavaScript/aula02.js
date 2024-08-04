class Pessoa {
  nome;
  idade;
  carro;
  anoDeNascimento;

  constructor(nome, idade, carro) {
    this.nome = nome;
    this.idade = idade;
    this.carro = carro;
    this.anoDeNascimento = 2024 - idade;
  }
  descrever() {
    console.log(
      `Meu nome é ${this.nome}, tenho ${this.idade} anos, e meu carro é um ${this.carro}`
    );
  }
}

const pedro = new Pessoa();
pedro.nome = 'Simão Pedro'
pedro.idade = 30
pedro.carro = 'Ferrari'

const carlos = new Pessoa();
carlos.nome = 'Carlos Henrique'
carlos.idade = 28
carlos.carro = 'Bugati'
// console.log(pedro)
// pedro.descrever();
// console.log(carlos);
// carlos.descrever();

// const dani = new Pessoa('Daniella', 41, 'Masseratti');
// dani.descrever();

// console.log(dani)

function comparandoIdades(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho que ${p2.nome}`);
  } else if (p1.idade < p2.idade) {
    console.log(`${p2.nome} é mais velho que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
  }
}

comparandoIdades(carlos, pedro)