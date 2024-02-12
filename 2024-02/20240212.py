# Today is beautiful weather. Peter is walking to his favorite Tower in CodinCountry. He still has to walk x meters to reach the bottom of the tower, when his friend L, who is standing on top of the tower, spots him. Excited, to see his long lost friend, he tries to draw his attention and starts waving. The tower is unfortunately way too high, h meters above the ground to be exact. Output the distance d in meters (round down), from L's waving from the tower to Peter's eyes. L's waving is on the same level as Peter's eyes, when they are both standing on the ground.
# Input
# Line 1: Two integers x and h
# Output
# Line 1: One integer d (round down), describing the distance.
# Constraints
# 0 < x, h < 1000000
# Example
# Input
# 3 4
# Output
# 5

import sys
import math

x, h = [int(i) for i in input().split()]
print(math.floor(math.sqrt(math.pow(x,2) + math.pow(h,2))))