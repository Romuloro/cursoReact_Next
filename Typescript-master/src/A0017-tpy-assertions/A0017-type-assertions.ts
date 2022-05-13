/* Recomendado */
// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.backgroundColor = 'red';

// Type assertions
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.backgroundColor = 'green';

// HTMLBodyElement
const input1 = document.querySelector('.input') as HTMLInputElement;
input1.value = 'test';

/* Não recomendado */
// Non-null assertions (!)
const body3 = document.querySelector('body')!;
body3.style.backgroundColor = 'red';

// Type assertions
const body4 = document.querySelector('body') as unknown as number;

export default 3;
