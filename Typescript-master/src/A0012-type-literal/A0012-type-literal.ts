const person = {
    name: 'João' as const,
    lastName: 'Silva',
};

const escolhaCor = (cor: 'Amarelo' | 'Azul' | 'Roxo'): string => {
    return cor;
};

console.log(escolhaCor('Roxo'));

export default 15;
