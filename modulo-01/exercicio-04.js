//4 - Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido

let inss;
let ir;
let salarioBruto = 3000;

if (salarioBruto <= 1518) {
  inss = salarioBruto * 0.075;
} else if (salarioBruto <= 2793.88) {
  inss = salarioBruto * 0.09;
} else if (salarioBruto <= 4190.83) {
  inss = salarioBruto * 0.12;
} else if (salarioBruto <= 8157.41) {
  inss = salarioBruto * 0.14;
}

let salarioBase = salarioBruto - inss;

if (salarioBase <= 2259.2) {
  ir = 0;
} else if (salarioBase <= 2826.65) {
  ir = (salarioBase * 0.075) - 169.44;
} else if (salarioBase < 3751.05) {
  ir = (salarioBase * 0.15) - 381.44;
} else if (salarioBase < 4664.68) {
  ir = (salarioBase * 0.225) - 662.77;
} else {
  ir = (salarioBase * 0.275) - 896.0;
}


console.log("Salario Base R$ " + (salarioBase - ir));
