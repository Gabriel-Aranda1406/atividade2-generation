const leia = require('readline-sync');

let nome;
let codigo;
let salario;
let novoSalario;

nome = leia.question("\nDigite seu nome: ")

console.log("1 - Gerente")
console.log("2 - Vendedor")
console.log("3 - Supervisor")
console.log("4 - Motorista")
console.log("5 - Estoquista")
console.log("6 - Técnico de TI")

codigo = leia.questionInt("\nDigite o codigo do seu cargo: ")
salario = leia.questionInt("\nQuanto é o seu salário? ");


switch(codigo){
    case 1:
        novoSalario = salario  + (0.1 * salario);
        console.log(`O novo salario do gerente ${nome} será R$ ${novoSalario}`)
        break;
    case 2:
        novoSalario = salario + (0.07 * salario);
        console.log(`O novo salario do vendedor ${nome} será R$ ${novoSalario}`);
        break;
    case 3:
        novoSalario = salario + (0.09 * salario);
        console.log(`O novo salario do supervisor ${nome} será R$ ${novoSalario}`);
        break;
    case 4:
        novoSalario = salario + (0.06 * salario);
        console.log(`O novo salario do motorista ${nome} será R$ ${novoSalario}`);
        break;
    case 5:
        novoSalario = salario + (0.05 * salario);
        console.log(`O novo salario do estoquista ${nome} será R$ ${novoSalario}`);
        break;
    case 6:
        novoSalario = salario + (0.08 * salario);
        console.log(`O novo salario do Técnico de T.I ${nome} será R$ ${novoSalario}`);
        break;
}
