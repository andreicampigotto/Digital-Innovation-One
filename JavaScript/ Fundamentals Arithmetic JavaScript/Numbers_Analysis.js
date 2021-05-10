/*

Desafio
Você deve fazer a leitura de 5 valores inteiros. 
Em seguida mostre quantos valores informados são pares, 
quantos valores informados são ímpares, quantos valores informados são positivos e 
quantos valores informados são negativos.

*/

var count = 0;
var positivos = 0, negativos = 0, par = 0, impar = 0;
 
while (count < 5){
  let valor = parseInt(gets());
 
  if (valor > 0){
    positivos ++;
  }
  
  if (valor < 0){
    negativos ++;
  }
  
  if (valor % 2 == 0){
    par ++;
  }
  else{
    impar++;
  }
  count++;
}

console.log(par + " valor(es) par(es)");  
console.log(impar + " valor(es) impar(es)");
console.log(positivos + " valor(es) positivo(s)");
console.log(negativos + " valor(es) negativo(s)");

