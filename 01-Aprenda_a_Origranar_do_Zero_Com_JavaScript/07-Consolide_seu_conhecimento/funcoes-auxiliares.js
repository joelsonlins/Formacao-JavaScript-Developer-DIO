
// const entradas = [5.5]; //Desafio 01
// const entradas = [5, 3, 4, 1, 10, 8]; //Desafio 02
const entradas = [2000, 250]
let i=0;

function gets(){
    const valor = entradas[i]
    i++;
    return valor;
};
function print(texto){
    console.log(texto)
};

module.exports = {gets,print};