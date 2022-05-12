// Arrays
const arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5];
const arrayDenumerosNew: number[] = [1, 2, 3, 4, 5];

// Objetos

const pessoa: { nome: string; idade: number; adulto?: boolean } = {
    nome: 'Rômulo',
    idade: 15,
    adulto: true,
};

// Função

const soma = (x: number, y: number): number => {
    return x + y;
};

const num = soma(2, 3);
console.log(num);

module.exports = soma;
