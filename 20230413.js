/*
The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
01 Test 1
    Input
        ABC
    Expected output
        DEF
02 Test 2
    Input
        CHICK
    Expected output
        HMNHP
03 Test 3
    Input
        HELLO
    Expected output
        MJQQT
04 Test 4
    Input
        I LOVE FRANCE
    Expected output
        V-Y\cR-S_N[PR
*/

const M1 = readline();
const listaCaracteres = [...M1];
let saida = [];

listaCaracteres.map( caracter => { 
    let code = caracter.charCodeAt()
    saida.push(String.fromCharCode(code + M1.length))
})
console.log(saida.join(""))
