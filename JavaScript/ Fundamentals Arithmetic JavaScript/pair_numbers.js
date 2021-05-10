/*

Desafios
Crie um programa que leia um número e mostre os números pares até esse número, 
inclusive ele mesmo.

*/

let N = parseFloat(gets());

for(i= 1; i <= N; i ++){
  if(i % 2  == 0){
    console.log(i);
  }
}
