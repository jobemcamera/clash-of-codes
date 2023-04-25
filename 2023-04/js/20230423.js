/*
Your program must output the number of letters inside a message. A letter is a un character in [a-z] or [A-Z].

INPUT:
Line 1: A string message.

OUTPUT:
Line 1: The number of letters inside the message.

EXAMPLE:
Input
I am
Output
3
*/

const message = readline();
const padrao = /[a-zA-Z]/
let contador = 0;

for (let i = 0; i < message.length; i++) {
    if (message[i].match(padrao)) {
        contador += 1;
    }
}

console.log(contador);