//2 - Utilize if...else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro
const base = 60;
const altura = 60;
const largura = 70;

const soma = base + altura + largura == 180;

if (soma) {
  console.log(`${soma}, Os ângulos representarem os ângulos de um triângulo`);
} else {
  console.log(
    `${soma}, Os ângulos não representarem os ângulos de um triângulo`,
  );
}
