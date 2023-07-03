/*
Bob encrypted the message for Alice. Help Alice decrypt the message from Bob.
Input
Line: Text containing encrypted
message.
Output
The message you found.
Constraints
Example
Input
eaSy valIdatoR, sir
Output
sir
*/

const text = readline().split('');
let message = '';
text.forEach((words) => {
    if (words.match(/[A-Z]/)) {
        message += words.toLocaleLowerCase();
    }
})
console.log(message);
