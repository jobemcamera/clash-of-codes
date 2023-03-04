/*
Input
    "Hello, World!"
Output
    72 101 108 108 111 44 32 87 111 114 108 100 33
*/

const N = readline();
let charcode = []
let letra = ''


for (let i = 0; i<N.length; i++) {
    letra += N[i];
    charcode.push(letra.charCodeAt(i))
}
console.log(charcode.join(' '));