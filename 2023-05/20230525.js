/*
Find how many times a letter is repeated in the string

Input
Different words

Output
2
*/

const N = parseInt(readline());
var inputs = readline().split(' ');

let repeat = 0;
for (let i = 0; i < N; i++) {
    const word = inputs[i];
    for (let j = i+1; j < N; j++) { 
        let checkRepeat = inputs[j].search(word)
        if (checkRepeat != -1) {
            repeat += 1;
        }
    }
}

console.log(repeat);
