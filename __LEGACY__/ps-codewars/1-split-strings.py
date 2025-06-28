# Complete the solution so that it splits the string into pairs of two characters. 
# If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
def solution(s):
    # underscore conditions
    if len(s) % 2 != 0:
        s += '_'
    # split string into pairs
    return [s[i:i+2] for i in range(0, len(s), 2)]
