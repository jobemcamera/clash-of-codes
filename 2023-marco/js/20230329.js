/*
John's task is to plant as many trees as he can in a square grid
One tree takes up 2x2 spaces

Input
An integer n Length of one side of a square
Output
An integer a The most number of trees John can plant

Constraints
2 < n < 50

Example
Input
2
Output
1
*/

const n = parseInt(readline());
let area = 0;
let arvores = 0;

if (n == 2) {
    arvores = 1;
} else if (n < 1) {
    arvores = 0;
} else {
    area = (n-1)**2;
    arvores = Math.floor(area / 4)
}

console.log(arvores)
