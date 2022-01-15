function calculadora() {
  const operacao = Number(prompt(
      "Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Divisão real(/)\n 4 - Divisão Inteira(%)\n 5 - Multiplicação (*)\n 6 - Potenciação (**)"));


  if (!operacao || operacao >= 7) {
    alert("Ops essa opção foi inválida :( tente novamente... ");
    calculadora();
  } 
  
  else {
    let v1 = Number(prompt("Insira o PRIMEIRO valor:"));
    let v2 = Number(prompt("Insira o SEGUNDO valor:"));
    let resultado;

    if (!v1 || !v2) {
      alert("Parâmetros inválidos");
      calculadora();
    } 
    
    else {
      switch (operacao) {
        case 1:
          soma();
          break;
        case 2:
          subtracao();
          break;
        case 3:
          divisaoReal();
          break;
        case 4:
          divisaoInteira();
          break;
        case 5:
          multiplicacao();
          break;
        case 6:
          potenciacao();
          break;
      }

      function soma() {
        resultado = v1 + v2;
        alert(`A soma entre ${v1} e ${v2} é ${resultado}`);
        novaOperacao();
      }

      function subtracao() {
        resultado = v1 - v2;
        alert(`A subtração entre ${v1} e ${v2} é ${resultado}`);
        novaOperacao();
      }

      function divisaoReal() {
        resultado = v1 / v2;
        alert(`A divisão entre ${v1} e ${v2} é ${resultado}`);
        novaOperacao();
      }
      function divisaoInteira() {
        resultado = v1 % v2;
        alert(`O resto da divisão entre ${v1} e ${v2} é ${resultado}`);
        novaOperacao();
      }

      function multiplicacao() {
        resultado = v1 * v2;
        alert(`${v1} multiplicado por ${v2} é ${resultado}`);
        novaOperacao();
      }

      function potenciacao() {
        resultado = v1 ** v2;
        alert(`${v1} elevado a ${v2} é ${resultado}`);
        novaOperacao();
      }1

      function novaOperacao() {
        let opcao = Number(prompt("Deseja realizar nova operação?\n 1 - SIM\n 2 - NÃO"));

        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert("Até mais!");
        } else {
          alert("OPS! Digite um valor válido..");
          novaOperacao();
        }
      }
    }
  }
}
calculadora();
