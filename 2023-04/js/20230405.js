/*Output the input text with alternating upper and lowercase characters.
Characters in even position should be uppercase and odd position should be lowercase.
Non-alphabetic characters will not be modified and will be output as well.

Input
Line 1: An integer N for the number of text lines.
Next N lines: Text lines

Output
N lines: The input text with alternating upper and lowercase characters

Constraints
1 ≤ N ≤ 100

Example
Input
1
Hello World!

Output
HeLlO WoRlD!
*/
const N = parseInt(readline());

for (let i = 0; i < N; i++) {
    const ROW = readline();
    let changed = ''
    for (let j = 0; j < ROW.length; j++) {
        if (j % 2 === 0) {
            changed += ROW[j].toUpperCase();
        } else {
            changed += ROW[j];
        }
    }
    console.log(changed)
}
