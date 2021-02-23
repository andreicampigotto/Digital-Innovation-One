/*

Desafio
Você deve calcular o consumo médio de um automóvel onde será informada a distância total 
percorrida (em Km) e o total de combustível consumido (em litros).

*/

let X = parseInt(gets());
let Y = parseFloat(gets());

  let kmL = (X / Y).toFixed(3);

console.log(kmL + " km/l");