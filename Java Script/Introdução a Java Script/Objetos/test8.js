let pessoa = {
  nome: 'João',
  idade: '35',
  casado: true,
};

let prop = 'nome';
console.log(pessoa[prop]);

pessoa.numeroDeFilhos = 2;
console.log(pessoa);

function criaPessoa(n, i, c, f) {
  return {
    nome: n,
    idade: i,
    casado: c,
    numeroDeFilhos: f,
    maiorDeIdade: () => this.idade >= 18
  };
};

let pessoa1 = criaPessoa('João', 35, true, 2);
let pessoa2 = criaPessoa('Maria', 17, false, 0);
console.log(1, pessoa1, pessoa1.maiorDeIdade());
console.log(2, pessoa2, pessoa2.maiorDeIdade());

function Pessoa(n, i, c, f) {
  this.nome = n;
  this.idade = i;
  this.casado = c;
  this.numeroDeFilhos = f;
  this.maiorDeIdade = () => this.idade >= 18;
};

let pessoa3 = new Pessoa('João', 25, true, 2);
console.log(pessoa3);
console.log(4, pessoa3.maiorDeIdade());

for (let chave in pessoa3) {
  if (typeof pessoa3[chave] != 'function')
    console.log(`O valor de "${chave}" é ${pessoa3[chave]}`);
};

let pessoa4 = pessoa3; // cópia da referência para o objeto
console.log(5, pessoa4);

pessoa3.nome = 'José Carlos';
console.log(6, pessoa4);

let pessoa5 = {};
for (let chave in pessoa3) {
  pessoa5[chave] = pessoa3[chave];
};

console.log(7, pessoa5);
pessoa3.nome = 'João';
console.log(8, pessoa3);
console.log(9, peesoa5);

