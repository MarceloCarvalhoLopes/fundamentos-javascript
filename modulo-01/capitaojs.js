//1 — O Recruta
//Crie as informações básicas de um herói: nome, idade, se ele é humano e seu poder inicial. Exiba essas informações no console.

let nome = "José da Silva";
let idade = 45;
let ehHumando = true;

//2 — O Codinome Secreto
//Todo herói tem um codinome que não pode mudar. Crie o codinome e o nível inicial do herói (número inteiro).

const codinome = "O terror";
let nivel = 10;

//3 — Energia de Combate
//O herói começa com 100 de energia. Ele luta contra dois vilões e perde 25 de energia em cada luta. Calcule a energia restante.
//Formato da saída:
//"Energia restante:", energia

let energia = 100;
let energiaVilao = 25;


//4 — Golpe Crítico
//O dano base do herói é 10. Um golpe crítico dobra o dano e soma 5 de bônus. Calcule o dano final corretamente.

let danoBase = 10;
let golpeCritico = (danoBase > 10) ? danoBase : (danoBase * 2) + 5;



