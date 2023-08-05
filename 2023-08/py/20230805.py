# The program:
# Convert a hexadecimal number into decimal.

# INPUT:
# A string number which contains a hexadecimal number in capitals.

# OUTPUT:
# The decimal value of the given number.

# CONSTRAINTS:
# number represents a positive integer ≤ 10000000.

# EXAMPLE:
# Input
# F
# Output
# 15
 
import sys
import math

number = input()
hex = int(number,16)
print(hex)
