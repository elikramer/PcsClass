import random

for i in range(1, 11):
    for j in range(1, 11):
        print(i * j)


play = True
number = random.randint(1, 11)   
guess = int(input("Guess a number from 1 to 10: "))

while play:
    if guess > number:
        print("Too high. ")
        guess = int(input("Guess again: "))
    elif guess < number:
        print("Too low.")
        guess = int(input("Guess again: "))
    else:
        print("You got it!")
        play = False



       