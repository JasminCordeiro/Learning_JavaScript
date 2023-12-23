// Faça um código que a partir do salário de um colaborador faça o reajuste
// segundo o critério abaixo, baseado no salário atual:
// salários até R$ 280,00 (incluindo) : aumento de 20%
// salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// salários de R$ 1500,00 em diante : aumento de 5%.
// Após o aumento ser realizado, informe na tela:
// o salário antes do reajuste;
// o valor do aumento;
// o novo salário, após o aumento.

const readline = require('prompt-sync')
const input = readline()

const salario = parseFloat(input('Digite seu salário: '))
let aumento,newsalario;

if(salario <= 280){
    aumento = 0.2 * salario
    newsalario = aumento + salario
}else if(salario > 280 && salario <= 700){
    aumento = 0.15 * salario
    newsalario = aumento + salario
}else if(salario > 700 && salario < 1500){
    aumento = 0.10 * salario
    newsalario = aumento + salario
}else{
    aumento = 0.05 * salario
    newsalario = aumento + salario
}

console.log("O seu antigo salário é: ", salario)
console.log("O valor do aumento é: ", aumento)
console.log("O seu novo salário é: ", newsalario)