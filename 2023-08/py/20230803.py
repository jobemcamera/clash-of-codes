# You need to create a program that retrieves all the uppercase letters from a specific text input. However, there's a twist. The program should not only find the uppercase letters but also identify their original positions in the text input. The positions should be represented as a comma-separated string of indices. If there are no uppercase letters found, the program should print the constant value None.

# Players must reverse engineer the code to find both the original uppercase letters and their positions in the text input or determine that there are none.
# Input
# A string containing text input of arbitrary length.
# Output
# If uppercase letters are found, a comma-separated string of their positions in the text input. If no uppercase letters are found, the string None.
# Constraints
# - The text input can contain any printable ASCII characters.
# - The length of the text input is not limited.
# Example
# Input
# Hello, World!
# Output
# 0,7

import sys
import math

s = input()
positions = []

for index, char in enumerate(s):
  if char.isupper():
    positions.append(str(index))

result = ",".join(positions) if positions else "None"
print(result)