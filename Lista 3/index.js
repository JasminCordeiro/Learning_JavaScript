// A partir de um vetor de números de 10 posições, encontre o maior e o 
// menor número.

const vetor = [0,2,3,4,5,6,7,8,9,11]
let maiorNumero = vetor[0];
let menorNumero = vetor[0];


    for(let i in vetor){
        if(vetor[i] > maiorNumero){
            maiorNumero = vetor[i];
        }
        if(vetor[i]<menorNumero){
            menorNumero = vetor[i];
        }
    }

console.log("O maior número é:",maiorNumero)
console.log("O menor número é:",menorNumero)