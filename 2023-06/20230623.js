/*
print the smallest odd number

Input
Line : list of numbers

Output
Line : the smallest odd number

Constraints
Example

Input
2 1 3 8 5

Output
1
*/

const line = readline().split(' ');

let index = line.indexOf(Math.min(...line))
const smallestOddNumber = Math.min(...line) % 2 !=0 ? Math.min(...line) : Math.min(...line.splice(index, 1))

console.log(smallestOddNumber);
