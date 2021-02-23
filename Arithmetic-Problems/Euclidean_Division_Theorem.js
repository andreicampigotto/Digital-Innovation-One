/*
Desafio
Você recebeu desafio de desenvolver um programa que calcule o quociente e o resto da divisão 
de dois números inteiros. Não se esqueça que o quociente e o resto da divisão de um inteiro 
a por um inteiro não-nulo b são respectivamente os únicos inteiros q e r tais que:

0 ≤ r < |b|

Se r < 0: r = r - |b|

a = b × q + r

q = ( a - r ) / b

Caso você não saiba, o teorema que garante a existência e a unicidade dos inteiros q e r é 
conhecido como ‘Teorema da Divisão Euclidiana’ ou ‘Algoritmo da Divisão’.

**  |b| (Módulo / Valor absoluto): É o valor representado de forma positiva;
*/

let array = gets().split(' ');

let a = parseInt(array[0]);
let b = parseInt(array[1]);

let r = a % b;
let q = (a - r) / b;

if(r < 0){
    r += Math.abs(b);
    q = (a-r)/b;
}
console.log(q + " " + r);