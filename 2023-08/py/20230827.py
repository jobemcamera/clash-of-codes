# There are multiple organisations that span the chess world, each with their own method of calculating a player's skill. You must convert an ECF chess rating into a FIDE chess rating.

# Rules:
# ECF x 7.5 + 700 = FIDE
# Input
# Line 1: An integer N for the number of ratings to convert.

# Next N lines: An integer e for the ECF rating.
# Output
# N lines: The FIDE rating, rounded down to the nearest integer.
# Constraints
# 2 ≤ N ≤ 9
# 2 ≤ e ≤ 300
# Example
# Input
# 2
# 2
# 300
# Output
# 715
# 2950

import sys
import math

n = int(input())
for i in range(n):
    e = int(input())
    print(math.floor(e*7.5 +700))