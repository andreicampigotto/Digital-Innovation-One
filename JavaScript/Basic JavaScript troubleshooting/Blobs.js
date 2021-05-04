/*
 ----> Essa solucao eu encontrei parecida na internet e adaptei ao meu problema 
 pois a minha passava no console mas nao no desafio <---

No planeta Alpha vive a criatura Blobs, 
que come precisamente 1/2 de seu suprimento de comida disponível todos os dias. 
Escreva um algoritmo que leia a capacidade inicial de suprimento de comida (em Kg), 
e calcule quantos dias passarão antes que 
Blobs coma todo esse suprimento até restar um quilo ou menos.

*/

let casoDeTeste = parseInt(gets());

function calcularDias(quantidadeComida) {
  if (quantidadeComida <= 1.0) {
    return 0;
  }
  const comerComida = quantidadeComida / 2.0;
  
  return 1 + calcularDias(comerComida);
}

while (casoDeTeste-- > 0) {
  const quantidadeComida= parseFloat(gets());
  const diasFinais = calcularDias(quantidadeComida);
  
  console.log(diasFinais, 'dias');
}