const pessoa = {
    nome: 'Pedro Simão',
    idade: 22,
    carro:'Civic',
    descrever: function (){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos`)
    }
}
// pessoa.descrever = function(){
//     console.log(`Eu tenho um ${this.carro}`)
// }

// pessoa.altura = 1.78

// // console.log(pessoa)

// delete pessoa.carro;

// // console.log(pessoa)

// pessoa.descrever();

// pessoa.nome = 'Renan'
// pessoa.idade = 30

// pessoa.descrever()
// console.log(pessoa)

const atributo = 'idade';
console.log(pessoa[atributo])
console.log(pessoa['carro'])

pessoa['nome'] = 'teste' // dinâmico
pessoa.nome = 'teste' //acesso direto
