/*
Count the number of times the digits in a number changes. For example: 333 changes 0 times and 123 changes 2 times.
Input
An integer N
Output
The number of times the digits in N changes
Constraints
0<N
Example
Input
123
Output
2
*/

const N = readline();
const lista = [...N];
let changes = 0;

for (let i = 0; i < lista.length; i++) {
    if (lista[i+1] - lista[i] != 0) {
        changes += 1
    }
}
console.log(changes-1);
