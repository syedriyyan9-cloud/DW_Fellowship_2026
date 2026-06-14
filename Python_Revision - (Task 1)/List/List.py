# list is a data structure that can store several different data types
# it is an ordered collection of items

# example

marks = [95, 98, 97, "maths"]
print(marks)
print(marks[3]) # index 3 - last item

# in python index can be negative
print(marks[-2]) # 2nd last item

# printing a subset of previous list
print(marks[0:3])

# we can also loop over lists
for score in marks:
    print(score)

# a lot of operations can be performed on lists

# adds an item at the end of the list
marks.append(53)
print(marks)

# inserts a value at an index, index is the 1st argument
marks.insert(0, 89)
print(marks)

# checking if a value exist in list
print(93 in marks)

# removes an item from list based on value
marks.remove("maths")
print(marks)

i = 0
while i < len(marks):
    print(marks[i])
    i += 1

# delete all the elements from list
marks.clear()
print(marks)