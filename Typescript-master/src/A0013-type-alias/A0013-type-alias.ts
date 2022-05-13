type Pessoa = {
    nome: string;
    idade: number;
    salario: number;
    corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

export default function setCorPreferida(
    pessoa: Pessoa,
    cor: CorPreferida,
): Pessoa {
    return { ...pessoa, corPreferida: cor };
}

const pessoa: Pessoa = {
    idade: 30,
    nome: 'Rômulo',
    salario: 15000,
};

console.log(setCorPreferida(pessoa, 'Ciano'));
