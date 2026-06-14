name = "Tony Stark"

# does not change original string
# returns a copy of the original string with modifications made to it
print(name.upper())
print(name.lower())

# take care of upper or lower case letters
print(name.find('S'))
print(name.find('Stark'))

# replaces substring with 2nd argument also in str
print(name.replace("Tony", "Lancelot"))

# helps in finding if a character or substring is present
# in a string
print('s' in name)
print('S' in name)