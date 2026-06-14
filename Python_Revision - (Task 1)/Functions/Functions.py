# functions are block of code that perform a single action
# 3 types - built-in function, module function, user defined functions

# example of built in functions
# print(), int(), input(), sum(), range()

# example of module function
# use import statement to use a module
# import math

# to know which functions are present in a module use dir() function
# print(dir(math))

# to import a single function use from statement
from math import sqrt
print(sqrt(64))

# example of user defined functions
# we use def and then give name to function, then declare parameters
# then use colon and indent the code you want to be in the function

def add(num1, num2):
    # use return statment if you want the function
    # to give you the produced value
    return num1 + num2 

print(add(2,3))