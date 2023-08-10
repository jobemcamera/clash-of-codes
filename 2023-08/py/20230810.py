# The sum of the squares of the first seven natural numbers is,

# 1^2 + 2^2 + ... + 7^2 = 140

# The square of the sum of the first seven natural numbers is,

# (1 + 2 + ... + 7 )^2 = 28^2 = 784

# Hence the difference between the sum of the squares of the first seven natural numbers and the square of the sum is
# 784 - 140 = 644


# .
# Input
# Line 1: An integer N.
# Output
# Line 1: An integer K ( The difference between the sum of the squares of the first N natural numbers and the square of the sum )
# Constraints
# 2 ≤ N < K ≤ 41873
# Example
# Input
# 7
# Output
# 644

import sys
import math

n = int(input())
sum_square = 0
sum = 0

for i in range(1,n+1):
    sum_square += pow(i,2)
    sum += i

print(pow(sum,2) - sum_square)
