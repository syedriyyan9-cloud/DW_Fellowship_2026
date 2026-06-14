# logical operators are those operators that are used to manipulate logic
# there are 3 types of logical operators in python

# 1. 'and' operator
# 2. 'or' operator
# 3. 'not' operator

# and operator combines two or more values, if one is false then whole expression becomes false
# or operators combines two or more values, if one is true than whole expression becomes true
# not operator inverses the expression value, changes true to false, and false to true

print(True or False)        # output: True
print(True and False)       # output: False
print(not True, not False)  # output: False True

# examples
print(2 > 3 or 2 > 1)
print(2 > 3 and 2 > 1)
print(not 2 > 3, not 2 > 1)
