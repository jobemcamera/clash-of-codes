/*
Write a program that prints the numbers from 1 to N except for multiples of 5 where you have to print "Foo" and for the multiples of 7 where you have to print "Bar". For numbers which are multiples of both 5 and 7 print "FooBar".
Input
N: the upper limit of the range (inclusive)
Output
N lines
Constraints
1 ≤ N ≤ 200
Example
Input
36
Output
1
2
3
4
Foo
6
Bar
8
9
Foo
11
12
13
Bar
Foo
16
17
18
19
Foo
Bar
22
23
24
Foo
26
27
Bar
29
Foo
31
32
33
34
FooBar
36
*/

const N = parseInt(readline());

for (let i = 1; i <= N; i++) {
    if (i % 5 == 0 && i % 7 != 0) console.log('Foo');
    else if (i % 7 == 0 && i % 5 != 0) console.log('Bar');
    else if (i % 5 == 0 && i % 7 == 0) console.log('FooBar');
    else console.log(i);
}
