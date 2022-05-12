const objetoA: {
    chaveA: string;
    chaveB: string;
    [key: string]: unknown; // index sigmature
} = {
    chaveA: 'ChaveA',
    chaveB: 'ChaveB',
};

objetoA.chaveA = 'Outro valor';
objetoA.chaveD = 'Novo valor';

console.log(objetoA);
