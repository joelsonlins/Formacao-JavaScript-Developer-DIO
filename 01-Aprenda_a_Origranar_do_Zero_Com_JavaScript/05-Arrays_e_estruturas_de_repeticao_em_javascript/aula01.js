// const alunos = ['João', 'Vitor', 'Marina', 'Vinícius'];

// console.log(alunos[2]);

// alunos.push('Renan');
// alunos.push('22');

// console.log(alunos)

// alunos.pop()
// console.log(alunos)

const notas  = [];
let soma = 0;
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

for (let i =0; i<notas.length; i++){
    soma+=notas[i]
}

console.log(notas.length);

let media = soma/notas.length
console.log("A sua média foi: ",media)