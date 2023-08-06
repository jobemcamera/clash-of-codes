# You are given a string s consisting of only lowercase letters and spaces. You are then given another string krap also consisting of only lowercase letters and spaces. You are to remove all instances of krap from s, then print s
# Input
# Line 1: A string - s
# Line 2: A string - krap
# Output
# Line 1: s after all instances of krap are removed from it
# Constraints
# 0 < length s < 200
# 0 < length krap < 50
# 0 <= Instances of krap in s < 200
# Example
# Input
# qyrjkrapbnxhfuyjnkrapnfhrjgkkrapdjgkrapjntjgnd
# krap
# Output
# qyrjbnxhfuyjnnfhrjgkdjgjntjgnd

import sys
import math

s = input()
krap = input()
result = s.replace(krap, '')

print(result)