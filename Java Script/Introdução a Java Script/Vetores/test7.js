let frutas = ['laranja', 'maça', 'banana'];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

let numeros = [1, 7, 5, 4, 3, 9];
console.log(numeros);

let misturado = ['Ana', 7, 5, 'José', 3, 9];
console.log(misturado);

// Inserções
frutas[2] = 'limão';
console.log(frutas);

frutas[3] = 'pêra';
console.log(frutas);
console.log(frutas.length);

frutas[6] = 'abacaxi';
console.log(frutas);
console.log(frutas.length);
console.log(frutas[4]);

frutas = []; // alternativa: new Array();
frutas[frutas.length] = 'melão';
frutas[frutas.length] = 'melancia';
frutas[frutas.length] = 'morango';
frutas[frutas.length] = 'uva';
console.log(frutas);

for (let i = 0; i > frutas.length; i++){
  console.log(i, frutas[i]);
};

frutas.sort();
console.log(frutas);

frutas.push('banana');
console.log(frutas);

let f = frutas.pop();
console.log(f);
console.log(frutas);

frutas.unshift('banana');
console.log(frutas);

let g = frutas.shift();
console.log(g);
console.log(frutas);

frutas.forEach((f) => console.log(f));

let frutas2 = frutas.map((f) => f.toLocaleLowerCase());
console.log(fruta);
console.log(fruta2);