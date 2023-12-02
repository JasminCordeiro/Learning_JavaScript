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

