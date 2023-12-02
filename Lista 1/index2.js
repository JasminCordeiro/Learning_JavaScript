//A partir de um número aleatório inteiro de 0 a 100, imprima o seu sucessor e antecessor.

let valorAleatorio = Math.floor(Math.random() *100)
console.log("O valor aleatório é: ", valorAleatorio)

valorAleatorio = valorAleatorio + 1
console.log("O seu sucessor é: ",valorAleatorio)
valorAleatorio = valorAleatorio - 1
valorAleatorio = valorAleatorio - 1
console.log("O seu antecessor é: ",valorAleatorio)
