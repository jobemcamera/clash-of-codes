# You are given a string of characters s. Output the sum of the ASCII value for each character of the string.
# Input
# Line 1: A string S
# Output
# Line 1: The sum N of ASCII values
# Example
# Input
# An exemple
# Output
# 959

import sys
import math

s = input()
sum = 0
for string in s:
    sum += ord(string)

print(sum)
