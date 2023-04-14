/*
Implement collapse, which takes a non-negative integer, and returns the result of removing all digits from it that are duplicate of the digit immediately to their right.

Input
A non-negative integer N.

Output
An integer as a result of removing all digits from it that duplicate the digit immediately to their right.

Constraints
0 <= N <= 1000000000

Example
Input
12234441

Output
12341
*/

const N = readline();
const list = [...N]

const result = list.reduce((acumulador, atual, indice) => {
    if (atual != list[indice + 1]) {
        acumulador += atual
    }
    return acumulador
}, "")

console.log(result)
