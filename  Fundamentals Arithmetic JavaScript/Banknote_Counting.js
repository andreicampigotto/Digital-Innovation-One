/*
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas 
possíveis (cédulas) onde o valor pode ser decomposto. 
As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. 
Na sequência mostre o valor lido e a relação de notas necessárias.

*/
//Essa Solucao foi encontrada na internet em python e adaptada;
let notas = [100, 50, 20, 10, 5, 2, 1];
let qtda_notas = [0, 0, 0, 0, 0, 0, 0];

let valorRecebido = parseInt(gets());
let valor = valorRecebido;

while (valor >= 1) {
  
  nota = notas.findIndex(value => value <= valor);
  qtda_notas[nota] = Math.trunc(valor / notas[nota]);
  valor = valor % notas[nota];

}

console.log(valorRecebido);
console.log(qtda_notas[0] + " nota(s) de R$ 100,00");
console.log(qtda_notas[1] + " nota(s) de R$ 50,00");
console.log(qtda_notas[2] + " nota(s) de R$ 20,00");
console.log(qtda_notas[3] + " nota(s) de R$ 10,00");
console.log(qtda_notas[4] + " nota(s) de R$ 5,00");
console.log(qtda_notas[5] + " nota(s) de R$ 2,00");
console.log(qtda_notas[6] + " nota(s) de R$ 1,00");