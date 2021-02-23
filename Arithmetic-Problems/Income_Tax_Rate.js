/*

    Desafio
    Há um país denominado Lolipad, todos os habitantes ficam felizes em pagar seus impostos, 
    pois sabem que nele não existem políticos corruptos e os recursos arrecadados são utilizados em benefício da população, 
    sem qualquer desvio. A moeda deste país é o Loli, cujo símbolo é o R$.

    Você terá o desafio de ler um valor com duas casas decimais, 
    equivalente ao salário de uma pessoa de Loli. 
    Em seguida, calcule e mostre o valor que esta pessoa deve pagar de Imposto de Renda, 
    segundo a tabela abaixo.

    Lembre que, se o salário for R$ 3002.00, a taxa que incide é de 8% apenas sobre R$ 1000.00, 
    pois a faixa de salário que fica de R$ 0.00 até R$ 2000.00 é isenta de Imposto de Renda. 
    No exemplo fornecido (abaixo), a taxa é de 8% sobre R$ 1000.00 + 18% sobre R$ 2.00, 
    o que resulta em R$ 80.36 no total. O valor deve ser impresso com duas casas decimais.

*/

let salario = parseFloat(gets());

if (salario <= 2000){
  console.log("Isento");
}

else if(salario <= 3000){
  salario = ((salario - 2000.0) * 0.08).toFixed(2);
  console.log("R$ " + salario);
}


else if (salario <= 4500){
  salario = (1000 * 0.08 + (salario - 3000) * 0.18).toFixed(2);
  console.log("R$ " + salario);
}

else{
  salario = (1000 * 0.08 + 1500 * 0.18 + (salario - 4500) * 0.28).toFixed(2);
  console.log("R$ " + salario);
}