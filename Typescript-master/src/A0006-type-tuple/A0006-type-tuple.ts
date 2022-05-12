const dadosCliente1: readonly [number, string] = [1, 'Rômulo'];
const dadosCliente2: [number, string, string] = [1, 'Rômulo', 'Oliveira'];
const dadosCliente3: [number, string, boolean] = [1, 'Rômulo', true];

dadosCliente2[2] = 'Rodrigues';

console.log(dadosCliente1);
console.log(dadosCliente3);
console.log(dadosCliente2);
