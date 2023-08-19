/*
The program:
Your program must determine if a given string would be a safe password. Here, a password is considered safe if:
It contains at least 8 characters.
It contains at least 1 digit (0-9).
It contains at least 1 lowercase letter (a-z).
It contains at least 1 uppercase letter (A-Z).

INPUT:
Line 1: P a string containing a password.

OUTPUT:
Line 1: true if P is a safe password, false otherwise.

CONSTRAINTS:
0 < P.length < 100

EXAMPLE:
Input
11/12/1978
Output
false
*/ 

const S = readline();
const lengthPassword = S.length >= 8 ? true : false;
const digits = S.match(/[0-9]/) ? true : false;
const lowerCase = S.match(/[a-z]/) ? true : false;
const upperCase = S.match(/[A-Z]/) ? true : false;

if (lengthPassword && digits && lowerCase && upperCase) {
    console.log('true')
} else {
    console.log('false')
}
