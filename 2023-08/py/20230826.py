# You are given m integers each on a separate line. If an integer n is divisible by 2 multiply it by 2 otherwise multiply it by 3. For example if input is 1, 2, 3, the output should be 3, 4, 9.
# Input
# Line 1: An integer m for the number of integers to multiply.

# Next m lines: An integer n.
# Output
# m lines: Multiplied integer.
# Constraints
# 1 < m < 1000
# Example
# Input
# 3
# 1
# 2
# 3
# Output
# 3
# 4
# 9

import sys
import math

m = int(input())
for i in range(m):
    n = int(input())
    if n % 2 == 0:
        print(n*2)
    else:
        print(n*3)
