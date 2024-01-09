// 1. Crie um vetor de 50 posições com números aleatórios inteiros. 
// 2. Antes de inserir um número no vetor, verifique se o valor já está presente. 
// Se não estiver, o número será inserido. 
// 3. Ao final, imprima quantas vezes não foi possível inserir números no vetor. 
// 4. Crie um novo vetor contendo todos os números ímpares do vetor original. 
// 5. Imprima o somatório dos números ímpares no novo vetor. 

const tamVetor = 50;
let vetAleatorio = [];

function randomNumbers(min, max){
    return Math.floor(Math.random() *(max - min + 1)) + min;
}

for( let i = 0; i < tamVetor; i++){
    let newNumber;

    do{
        newNumber = randomNumbers(1,100);
    }while(vetAleatorio.includes(newNumber));

    vetAleatorio.push(newNumber);
}

console.log(vetAleatorio);

const tryInclude = tamVetor - vetAleatorio.length;
console.log("Tentativas de inserção sem sucesso:", tryInclude);

const somaImpares = vetAleatorio.filter(num => num % 2 !== 0).reduce((acumulador, num) => acumulador + num, 0);

console.log("Soma dos valores ímpares:", somaImpares);