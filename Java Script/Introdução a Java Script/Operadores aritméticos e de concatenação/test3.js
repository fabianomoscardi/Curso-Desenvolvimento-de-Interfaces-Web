a = 2;
b = ++a * 2;
console.log(a, b);

a = 2;
b = a++ * 2;
console.log(a, b);

let nome = 'José';
let sobrenome = 'Pereira';
console.log(nome + ' + sobrenome');

a = '5 + 2';
console.log(`a = ${a} dp tipo ${typeof a}`)
b = + '5' + 2;
console.log(`b = ${b} dp tipo ${typeof b}`)
let c = '5' - 2;
console.log(`c = ${c} dp tipo ${typeof c}`)
let d = 5 + '2';
console.log(`d = ${d} dp tipo ${typeof d}`)
let e = 5 - '2';
console.log(`e = ${e} dp tipo ${typeof e}`)
let f = 5 + 2 + '2';
console.log(`f = ${f} dp tipo ${typeof f}`)
let g = 5 + '2' + 2;
console.log(`g = ${g} dp tipo ${typeof g}`)
let h = + (5 + '2') + 2;
console.log(`h = ${h} dp tipo ${typeof h}`)
let i = '5' / '2';
console.log(`i = ${i} dp tipo ${typeof i}`)