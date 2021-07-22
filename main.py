from lib import telegram

def spamThePhone(textFile):
    i = 0

    with open(textFile, "r") as file:
        for line in file:
            textArray = line.split()
            for word in textArray:
                clearword = ''.join(e for e in word if e.isalnum())
                telegram.send(clearword)
                print(word)
            i = i + 1
            if (i > 10):
                return


spamThePhone("bro2.txt")
