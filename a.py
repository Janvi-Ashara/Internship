a = input('enter a string :')
print(a)

str = a[-1::-1]
if str==a:
    print('palindrome')
else:
    print('not')
