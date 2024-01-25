// Desenvolva uma função que receba um CPF por parâmetro e verifique se o
// CPF e valido. Algumas regras devem ser seguidas para realizar a validação.
// . Se o comprimento do CPF for maior do que 11 ou menor do que 11, a função
// deve retornar false.
// . Se o CPF consistir em uma sequência de números idênticos, por exemplo,
// '11111111111', a função deve retornar false.
// . Se o CPF seguir as regras de comprimento e não for uma sequência de
// números iguais, a função deve retornar true, indicando que o CPF é válido.
// Dica: CPF e uma String



function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
  
    if (cpf.length !== 11) {
      return false;
    }
  
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }
  
    const calcularDigitoVerificador = (slice) => {
      let soma = 0;
      for (let i = 0; i < slice.length; i++) {
        soma += parseInt(slice[i]) * (slice.length + 1 - i);
      }
      const resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
    };
  
    const digitoVerificador1 = calcularDigitoVerificador(cpf.slice(0, 9));
    if (parseInt(cpf.charAt(9)) !== digitoVerificador1) {
      return false;
    }
  
    const digitoVerificador2 = calcularDigitoVerificador(cpf.slice(0, 10));
    if (parseInt(cpf.charAt(10)) !== digitoVerificador2) {
      return false;
    }
  
    return true;
  }
  
  const cpfValido = "123.456.789-09";
  const cpfInvalido = "111.111.111-11";
  
  console.log(`CPF ${cpfValido} é válido? ${validarCPF(cpfValido)}`);
  console.log(`CPF ${cpfInvalido} é válido? ${validarCPF(cpfInvalido)}`);
  