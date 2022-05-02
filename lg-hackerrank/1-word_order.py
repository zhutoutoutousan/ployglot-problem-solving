# You are given n words. Some words may repeat. For each word, output its number of occurrences. The output order should correspond with the input order of appearance of the word. See the sample input/output for clarification.

# Read input from STDIN
# Sample Input
# 4
# bcdef
# abcdefg
# bcde
# bcdef

# Read input, the first number indicates how many times you should call input(), use for loop
# Create a dictionary with the strings as keys and the values as the number of times the string appears
callNumbers = int(input())
inputList = []
for i in range(callNumbers):
    inputList.append(input())

occurenceDict = {}
for word in inputList:
    if word in occurenceDict:
        occurenceDict[word] += 1
    else:
        occurenceDict[word] = 1

# Output 2 lines.
# On the first line, output the number of distinct words from the input.
# On the second line, output the number of occurrences for each distinct word according to their appearance in the input.
print(len(occurenceDict))
for key in occurenceDict:
    print(occurenceDict[key], end=" ")
print()
