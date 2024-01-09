// 1. Crie um vetor de 50 posições com números aleatórios inteiros. 
// 2. Antes de inserir um número no vetor, verifique se o valor já está presente. 
// Se não estiver, o número será inserido. 
// 3. Ao final, imprima quantas vezes não foi possível inserir números no vetor. 
// 4. Crie um novo vetor contendo todos os números ímpares do vetor original. 
// 5. Imprima o somatório dos números ímpares no novo vetor. 


let vetAlet = [];

for(let i = 0; i < 50; i++){
    
    vetAlet.push(Math.floor(Math.random() * 50 ));
}


console.log(vetAlet);
 
 