/*
The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:

Test 1
    Input
    8 2
    Expected output
    16106

Test 2
    Input
    5 4
    Expected output
    2091

Test 3
    Input
    9 6
    Expected output
    54153

Test 4
    Input
    20 3
    Expected output
    602317
*/

var inputs = readline().split(' ');
const a = parseInt(inputs[0]);
const b = parseInt(inputs[1]);

const multiplicacao = a*b;
const soma = a+b;
const subtracao = a-b;

let lista = [];

lista.push(multiplicacao, soma, subtracao);
console.log(lista.join(''));
