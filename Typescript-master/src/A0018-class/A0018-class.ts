// eslint-disable-next-line max-classes-per-file
export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ) {}
}

export class Empress {
    public readonly nome: string;

    private readonly colaboradores: Colaborador[] = [];

    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    monstrarColadores(): void {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}

const empresa1 = new Empress('Romulo Informática', '11.000.222/0006-15');
const colaborador1 = new Colaborador('Élissa', 'Santos');
const colaborador2 = new Colaborador('Albert', 'Lusco');
const colaborador3 = new Colaborador('Julio', 'Fontes');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

console.log(empresa1);

empresa1.monstrarColadores();
