const leia = require('readline-sync');

let num1;
let num2;
let num3;


num1 = leia.questionInt("Digite o primeiro número: ");
num2 = leia.questionInt("Digite o segundo número: ");
num3 = leia.questionInt("Digite o terceiro número: ");

let somaAB = num1 + num2;

if(somaAB > num3){
    console.log(`${somaAB} é maior que o ${num3}`);
} else if (somaAB < num3){
    console.log(`${somaAB} é menor que o ${num3}`);
} else if (somaAB == num3){
    console.log(`${somaAB} é igual ao número ${num3}`);
}
