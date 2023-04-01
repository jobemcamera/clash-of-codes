/*
Parênteses Balanceados
Uma string que consiste em parênteses esquerdo e direito, "(" e ")", é dada e pede-se que você equilibre os parênteses inserindo parênteses conforme 
necessário. Determine o número mínimo de caracteres que devem ser inseridos.

Descrição do formato da função solução
1) Recebe como parâmetro uma string com parênteses.
2) Retorne um número inteiro que deve ser o número mínimo de caracteres a serem adicionados na string.

Exemplos
Exemplo 1:
Entrada: palavra="()))"
Saída: 2

Exemplo 2:
Entrada: palavra="()()"
Saída: 0

Exemplo 3:
Entrada: palavra="())("
Saída: 2
*/

function balancearParenteses(palavra) {
    let pilha = [];
    let parenetesesAdd = 0;
    
    for (let i = 0; i < palavra.length; i++) {
        let caractere = palavra[i];
      
      if (caractere === '(') {
            pilha.push(caractere);
      } else if (caractere == ')') {
            if (pilha.length > 0 && pilha[pilha.length - 1] == '(') {
            pilha.pop();
        } else {
            parenetesesAdd++;
        }
      }
    }
    
    parenetesesAdd += pilha.length;

    return parenetesesAdd;
  }
  
  const palavra = "()))"
  console.log(balancearParenteses(palavra))