//3 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer

let peca = "Xablau";

switch (peca) {
  case "peao":
    console.log("Anda 1 casa para frente");
    break;
  case "torre":
    console.log("Linhas retas: Horizontal e Vertical");
    break;
  case "cavalo":
    console.log("Em formato de L: 2 casas em uma direção + 1 para o lado");
    break;
  case "bispo":
    console.log("Diagonal ↗ ↘ ↖ ↙, quantas casas quiser ");
    break;
  case "rainha":
    console.log(
      "Combina torre + bispo, Horizontal,Vertical,Diagonal, Quantas casas quiser",
    );
    break;
  case "rei":
    console.log("1 casa em qualquer direção");
    break;

  default:
    console.log("Peça inválida.");
    break;
}
