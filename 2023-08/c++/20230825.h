// A student has many classes and activities, causing him to have very little free time. He wants to balance playing video games and studying. If he can fit both in his free time, output OK. If he cannot fit it in his free time, he will cut back on his video game time. Output how long he can play video games to fit it in his free time.

// Input
// Line 1: An integer n for the hours of free time he has.
// Line 2: An integer v for the hours he wants to spend gaming.
// Line 3: An Integer s for the hours he wants to spend studying.

// Output
// Line 1: OK If it can fit in his free time, or how long he can play video games to fit everything in his free time.

// Constraints
// 0 <= n, v, s <= 24

// Example
// Input
// 24
// 8
// 10

// Output
// OK


#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
    int n;
    cin >> n;
    cin.ignore();
    int v;
    cin >> v;
    cin.ignore();
    int s;
    cin >> s;
    cin.ignore();

    if (n >= v + s)
    {
        cout << "OK" << endl;
    }
    else
    {
        cout << n - s << endl;
    }
}