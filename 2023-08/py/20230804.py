# Declan: Who the hell are you?

# Walt: You know. You all know exactly who I am. Say my name.

# Declan: What? I don't have a damn clue who the hell you are.
# Walt: Yeah, you do. I'm the cook. I'm the man who killed Gus Fring.

# Declan: Bullshit. Cartel got Fring.

# Walt: Are you sure? That's right. Now. Say my name.

# Declan: You're ............ ?
# Input
# Heisenberg
# Output
# 4
# Constraints
# Tip: output the count of letters 'e' case independently plus one
# Example
# Input
# Heisenberg
# Output
# 4


import sys
import math

x = input()
count_e = x.lower().count('e') 
output = count_e + 1
print(output)