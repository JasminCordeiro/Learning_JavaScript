//Faça um Programa que pergunte quanto você ganha por hora e o número de
//horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido
//mês, sabendo-se que são descontados 15% para o Imposto de Renda, 10%
//para o INSS e 2% para o sindicato, faca um programa que informe:
//. O salário bruto.
//. Quantia paga ao INSS.
//. Quantia para o sindicato.
//. Quantia para o imposto de renda
//. O salário líquido.
//  Dica: Porcentagem em javaScript: const desconto = salário * 0.15, onde 0.15 equivale a 15%.

const readline = require ('prompt-sync')
const input = readline()
const lucro = parseFloat(input('Digite a quanto você ganha por hora: '))
const hora = parseFloat(input('Digite o número de horas trabalhadas no mês: '))

const salario = lucro * hora
console.log("O salário bruto é: ",salario)
const inss = salario * 0.10
console.log("Quantia paga ao INSS: ",inss)
const sindicato = salario * 0.02
console.log("Quantia para o sindicato: ",sindicato)
const imposto_de_renda = salario * 0.15
console.log("Quantia para o imposto de renda: ",imposto_de_renda)
const salario_liquido = salario - inss - sindicato - imposto_de_renda
console.log("O salário líquido: ",salario_liquido)

