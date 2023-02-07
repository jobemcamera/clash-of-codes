/**
Input
    n: No of elements
    v: elements
Output
    print the square of sum of all numbers
Constraints
    n-Integer
    0<=n<=65536
    v-integer
    -32767<=v<=32767
 **/

const n = parseInt(readline());
let soma = 0;
for (let i = 0; i < n; i++) {
    const v = parseInt(readline());
    soma += v;
}
console.log(soma*soma);