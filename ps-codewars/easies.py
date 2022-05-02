I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000

# Dictionary
roman_dict = {
    'I': I,
    'V': V,
    'X': X,
    'L': L,
    'C': C,
    'D': D,
    'M': M
}

def solution(roman):
    return roman_to_int(roman)


# Roman to Integer
def roman_to_int(roman):
    # Initialize the result
    result = 0
    # Iterate through the Roman string
    for i in range(len(roman)):
        # If the next number is larger than the current one, it is subtracted
        if (i + 1) < len(roman) and roman_dict[roman[i]] < roman_dict[roman[i + 1]]:
            result -= roman_dict[roman[i]]
        else:
            result += roman_dict[roman[i]]
    return result
