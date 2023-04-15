/* 
Possivelmente Palíndromas
Observe as seguintes strings abaixo:

"arara"
"osso"
"socorram-me, subi no onibus em marrocos"

Agora leia essas strings de trás para frente. Você pode ler elas independentemente do sentido da leitura!

Palavras e frases assim são chamadas de palíndromas.

Agora observe as seguintes strings:
"parar"
"temem"
"technation"

"parar" e "temem" são chamadas de palavras potencialmente palíndromas
Isso ocorre porque você pode rearranjar/permutar as letras dessas palavras de forma que elas se tornem palíndromas

"parar" -> "rapar"
"temem" -> "metem"

Enquanto isso, "technation" nunca será uma palavra palíndroma, independentemente de como você reorganizar as letras dela (se duvida de mim, pode tentar!)

Observações adicionais:
1) Não é necessário que as strings sejam palavras que existem na vida real
2) Considere a string vazia como potencialmente palíndroma


Descrição do formato da função solução
1) Recebe como parâmetro uma string
2) Retorne True, caso a palavra seja potencialmente palíndroma. Retorne False, caso contrário


Exemplos
Exemplo 1:
Entrada: palavra = "abbac"
Saída: True

Exemplo 2:
Entrada: palavra = "abba"
Saída: True

Exemplo 3:
Entrada: palavra = "abbacd"
Saída: False
*/

function verificaPalindromo(palavra) {
    var padrao = /[\W_]/g; // remove todos os caracter não alfanuméricos
    palavra = palavra.toLowerCase().replace(padrao, "");
    for (var i = 0; i < palavra.length / 2; i++) {
        if (palavra[i] !== palavra[palavra.length - 1 - i]) { // se palavra.lenght for ímpar, i/2 = valor arredondado para cima. ex: 5/2 = 3
            return false;
        }
    }
    return true;
}
console.log(verificaPalindromo("abbab"));


// Solução mais acertiva

/*
function PotencialmentePalindromo(palavra) {
    const listaPalavra = [...palavra] // ['a', 'b', 'b', 'a', 'c']
    const resultado = listaPalavra.reduce((acumulador, atual) => {
        if (atual in acumulador) {
            acumulador[atual] += 1;
        } else {
            acumulador[atual] = 1;
        }

        return acumulador
    }, {});

    let somador = 0;

    for (const letra in resultado) {
        if (resultado.hasOwnProperty(letra)) {
            if (resultado[letra] % 2 == 1) {
                somador += 1;
            }
        }
    }

    if (somador > 1) {
        console.log("Não é potencialmente palíndromo.")
    } else {
        console.log("É potencialmente palíndromo.")
    }
}

const palavra = "aba";

PotencialmentePalindromo(palavra);
*/