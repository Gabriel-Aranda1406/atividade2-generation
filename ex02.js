const leia = require('readline-sync');

let numero;

numero = leia.questionInt("Digite o seu número: ");

if(numero % 2 === 0 ){
    console.log(`${numero} é um numero par. `);
}else {
    console.log(`${numero} é um número ímpar`)
}

if (numero > 0) {
    console.log(`${numero} é um número positivo. `)
}else if (numero < 0){
    console.log(`${numero} é um número negativo.`);
}else {
    console.log(`${numero} é zero`);
}