# Print a word containing n times the nth letter of the alphabet (uppercase).
# Input
# n: a number
# Output
# word : a word containing n times the nth letter of the alphabet (uppercase)
# Constraints
# 1<= n <= 26
# Example
# Input
# 5
# Output
# EEEEE

import sys
import math
import string

n = int(input())
alphabet = list(string.ascii_uppercase)
word = alphabet[n-1]
print(word*n)