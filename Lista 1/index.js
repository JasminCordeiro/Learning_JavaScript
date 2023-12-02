const readline = require('prompt-sync')
const input = readline()

const metros = parseFloat(input('Digite um valor em metros: '))
const decimetros = metros * 10
const centimetros = metros * 100
const milimetros = metros * 1000
console.log(`${metros} metros é:`, decimetros,'decimetros / ',centimetros,'centimetros / ', milimetros,'milimetros')
