/*
The task is to decode a secret message. Each message is encoded using a simple Caesar cipher. In addition a word is provided which is guaranteed to exist in the secret message.

Refresher on Caesar cipher (safe to skip if you are familiar with this cipher)
To encrypt the message "HELLO" with a Caesar cipher with a shift of 1, shift every letter by one. H becomes I, E becomes F, and so on. The encrypted message is "IFMMP". If the shift was 2, the encrypted message would be "JGNNQ". If the shift reaches the end of the letters then it wraps around to the beginning. For example, if the whole vocabulary is ABC, and the shift is 1, then A become B, B becomes C, C becomes A.

For this puzzle, the shift is not provided but the solution involves discovering it. The shift may be different for every test case.

There is only one unique solution to each test. Specifically, there is only one shift per test which decodes the message to contain the given word.

Input
Line 1: ALPHABET The characters in the cipher
Line 2: MESSAGE The encrypted message
Line 3: WORD The word that is in the message

Output
Line 1 Decrypted message

Constraints
ALPHABET contains only visible basic ascii characters such as 'a', '8', '{'. No spaces, tabs, bell, or emoji.
1 ≤ N ≤ 10
All strings are 200 characters or less.

Example
Input
ABCDEFGHIJKLMNOPQRSTUVWXYZ_
IFMMPAXPSME
WORLD

Output
HELLO_WORLD
*/

const ALPHABET = readline();
const MESSAGE = readline();
const WORD = readline();
let secret = [];
let pass = WORD.charCodeAt(WORD.length - 1) - MESSAGE.charCodeAt(MESSAGE.length - 1)

for (let i = 0; i < MESSAGE.length; i++) {
    let code = 0;
    code = MESSAGE.charCodeAt(i)
    if (MESSAGE[i] == ALPHABET[0]) {
        code = ALPHABET.charCodeAt(ALPHABET.length -1)
        secret.push(String.fromCharCode(code))
    } else {
        secret.push(String.fromCharCode(code + pass))
    }
}
console.log(secret.join(''))
