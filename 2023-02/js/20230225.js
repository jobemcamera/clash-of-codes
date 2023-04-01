/*
If the input number n is even, divide it by two, and if the result is still even repeat the process k times, until the resulting number p is odd, and output p.

Input
n an integer
Output
p an odd integer such as n=(2^k)*p

Constraints
1≤n<2^31
0≤k<31

Example
Input
6
Output
3
*/


var n = parseInt(6);

while (n % 2 != 1) {
    n = n / 2;
}

console.log(parseInt(n));
