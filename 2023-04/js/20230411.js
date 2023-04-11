/*Output the factorial of the integer N if N is positive

Input
An integer N to convert.

Output
If the integer provided isn't negative output a factorial of N else output "No negative integers"

Constraints
-100 ≤ N ≤ 100

Input
5

Output
120
*/

const N = 5;
let fat = 1;

if (N > 0) {
    for (let i = N; i > 0; i--) {
        fat *= i;
    }
    console.log(fat);
} else {
    console.log("No negative integers")
}
