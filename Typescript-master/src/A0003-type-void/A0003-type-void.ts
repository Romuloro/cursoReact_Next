function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Romulo',
    sobrenome: 'Rodrigues',

    exibirNome(): void {
        console.log(`${this.nome} ${this.sobrenome}`);
    },
};

semRetorno('Romulo', 'Rodrigues');
pessoa.exibirNome();

export default { pessoa };
