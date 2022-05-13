type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersecao = AB & AC; // Interseção

const pessoa: Pessoa = {
    nome: 'Rômulo',
    sobrenome: 'Oliveira',
    idade: 25,
};

console.log(pessoa);

export default Pessoa;
