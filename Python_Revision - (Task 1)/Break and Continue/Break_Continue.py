marks = [11,22,33,44,55,66,77]

# lets say we do not want to print value above 50
# here we used break to exit the loop
for score in marks:
    if score > 50:
        break
    print(score)

# what if we want to skip the values 
# between 50 to 60 and print the remaining values
# for this we would use continue statement
for score in marks:
    if score > 50 and score < 60:
        continue
    print(score) # value of 55 would get skipped
