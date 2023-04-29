/*
Your program must compute the number of eggs that bob can sell to Alice.

Bob is a farmer who lives in Axbourg, a small village of 100 inhabitants. He owns 7 chickens, 4 cows and 5 pigs. Each chicken lays in average 6 eggs per week. He has N eggs and Alice wants to buy at most M eggs. Display how many eggs Bob can sell to Alice.

INPUT:
Line 1 : The number N of eggs that Bob possess.
Line 2 : The number M of eggs that Alice can buy.

OUTPUT:
An integer that is the number of eggs that Bob can sell to Alice.

CONSTRAINTS:
0 < N, M < 30

EXAMPLE:
Input
5
2
Output
2
*/

const N = parseInt(readline());
const M = parseInt(readline());


if (N >= M) {
    console.log(M)
} else if (N < M) {
    console.log(N)
}