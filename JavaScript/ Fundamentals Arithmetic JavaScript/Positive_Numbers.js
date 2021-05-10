/*

Desafio
Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos 
como entrada, devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de 
valores positivos digitados.

*/

var count = 0;
var positivos = 0;
 
while (count < 6){
  let valor = parseFloat(gets());
 
  if (valor > 0){
    positivos ++;
  }
  count++;
}

console.log(positivos + " valores positivos");