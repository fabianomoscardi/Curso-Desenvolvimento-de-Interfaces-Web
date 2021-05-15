let acessoPermitido;
let idade = 21;
if (idade >= 18)
  acessoPermitido = true;
else acessoPermitido = false;
console.log(acessoPermitido);

let dividendo = 12;
let divisor = 3;
let quociente = divisor != 0 ? dividendo / divisor : Infinity;
console.log(quociente);

let nota = 75;
let frequencia = .8;
let aprovado = false;
if (nota >= 60)
  if (frequencia >= 0.75)
    aprovado = true;
  else {
    aprovado = false;
    console.log('Reprovado por frequência.');
  }
else {
  aprovado = false;
  console.log('Reprovado por nota.');
}

let a = 5;
let b = 3;
operador = '+';
resultado;
switch (operador) {
  case '+': resultado = a + b;
    break;
  case '-': resultado = a - b;
  break;
  case '*': resultado = a * b;
  break;
  case '/': resultado = a / b;
    break;
  default: resultado = null;
    break;
}

console.log(`Resultado = ${resultado}`)