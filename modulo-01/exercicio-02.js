//2 - Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro
const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 0;

const soma = angulo1 + angulo2 + angulo3 == 180;
const angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosPositivos) {
  if (soma) {
    console.log(`${soma}, Os ângulos representarem os ângulos de um triângulo`);
  } else {
    console.log(
      `${soma}, Os ângulos não representarem os ângulos de um triângulo`,
    );
  }
} else {
  console.log("Erro: Existe ângulo com valor irregular");
}
