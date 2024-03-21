const leia = require('readline-sync');

let nome;
let codigo;
let quantidade;
let preco;

nome = leia.question("\nDigite seu nome: ")

console.log("1 - Cachorro Quente -> R$10,00")
console.log("2 - X-Salada -> R$15,00")
console.log("3 - X-Bacon -> R$18,00")
console.log("4 - Bauru -> R$12,00")
console.log("5 - Refrigerante -> R$8,00")
console.log("6 - Suco de Laranja -> R$13,00")

codigo = leia.questionInt("\nDigite o codigo do seu lanche: ")
quantidade = leia.questionInt("\nQuantas unidades deseja comprar? ");

switch (codigo) {
    case 1:
        preco = 10.00;
        break;
    case 2:
        preco = 15.00;
        break;
    case 3:
        preco = 18.00;
        break;
    case 4:
        preco = 12.00;
        break;
    case 5:
        preco = 8.00;
        break;
    case 6:
        preco = 13.00;
        break;
    default:
        console.log("Código inválido.");
        break;
}

if (preco) {
    total = preco * quantidade;
    console.log(`\nOlá, ${nome}!`);
    console.log(`Valor total da compra: R$${total.toFixed(2)}`);
}