# building a calculator using if elif and else

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
operation = input("Enter operation (+,-,*,/,%): ")

if operation == '+':
    print("Your answer is: ",num1 + num2)
elif operation == '-':
    print("Your answer is: ",num1 - num2)
elif operation == '*':
    print("Your answer is: ",num1 * num2)
elif operation == '/':
    print("Your answer is: ",num1 / num2)
elif operation == '%':
    print("Your answer is: ",num1 % num2)
else:
    print("incorrect input")