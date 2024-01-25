// Desenvolva uma função que receba um vetor de nomes e uma letra como
// parâmetro, e retorne um novo vetor contendo apenas os nomes que contenha
// essa letra específica.
// Dica: use o método includes do vetor


function filtrarNomesPorLetra(vetorNomes, letra) {
  
    if (!Array.isArray(vetorNomes)) {
      return "Parâmetro inválido. Forneça um vetor de nomes.";
    }
  
    
    const nomesComLetra = vetorNomes.filter(nome => nome.toLowerCase().includes(letra.toLowerCase()));
  
    
    return nomesComLetra;
  }
  
 
  const nomes = ["Ana", "Beatriz", "Carlos", "Daniel", "Eduarda"];
  const letraFiltrar = "r";
  
  const nomesFiltrados = filtrarNomesPorLetra(nomes, letraFiltrar);
  
  console.log("Vetor de Nomes: ", nomes);
  console.log(`Nomes que contêm a letra "${letraFiltrar}": `, nomesFiltrados);
  