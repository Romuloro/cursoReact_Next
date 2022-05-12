// nunca retorna nada

export default function criaErro(): never {
    throw new Error('Error qualquer');
}

criaErro();
