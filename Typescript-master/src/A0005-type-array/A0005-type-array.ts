export function multiplynumber(...args: Array<number>): number {
    return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatString(...args: string[]): string {
    return args.reduce((acc, valor) => acc + valor);
}
export function toUpCase(...args: string[]): string[] {
    return args.map((valor) => valor.toUpperCase());
}

const resultMulti = multiplynumber(1, 2, 3, 4);
const resultConcat = concatString('a', 'x', 'd', 'e', 'f', 'g', 'h');
console.log(resultMulti, resultConcat);

const upper = toUpCase('a', 'x', 'd', 'e', 'f');
console.log(upper);
