/*
The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
Input
life_is_good
Expected output
snake_case

02 Test 2
Input
ButItCanBeBetter
Expected output
PascalCase

03 Test 3
Input
ifYouTry
Expected output
camelCase

04 Test 4
Input
snake_case_has_underscores
Expected output
snake_case

05 Test 5
Input
LotsOfCapitals
Expected output
PascalCase

06 Test 6
Input
capitalsButNotFirstOne
Expected output
camelCase

*/

const message = readline();
const snake_case = message.includes('_');
const PascalCase = message[0] == message[0].toUpperCase();
const camelCase = message[0] == message[0].toLowerCase() && !snake_case;

if(snake_case) {
    console.log('snake_case');
} else if (PascalCase) {
    console.log('PascalCase');
} else if (camelCase){
    console.log('camelCase')
}