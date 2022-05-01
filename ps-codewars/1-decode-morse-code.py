def morse():
    # Morse code dictionary
    morse = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F',
        '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
        '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R',
        '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
        '-.--': 'Y', '--..': 'Z', '-----': '0', '.----': '1', '..---': '2',
        '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7',
        '---..': '8', '----.': '9', '.-.-.-': '.', '--..--': ',', '..--..': '?',
        '.----.': "'", '-.-.--': '!', '-..-.': '/', '-.--.': '(', '-.--.-': ')',
        '.-...': '&', '---...': ':', '-.-.-.': ';', '-...-': '=', '.-.-.': '+',
        '-....-': '-', '..--.-': '_', '.-..-.': '"', '...-..-': '$', '.--.-.': '@',
        '...---...': 'SOS'
    }
    return morse

def decode_morse(morse_code):
    # Remove redundant spaces on both sides
    morse_code = morse_code.strip()
    # Get python morse lib
    morse_dict = morse()
    # Split the string into words
    words = morse_code.split('   ')
    # Split each word into letters
    letters = [word.split(' ') for word in words]
    # Decode each letter
    decoded = [''.join([morse_dict[letter] for letter in word]) for word in letters]
    # Return the decoded string
    return ' '.join(decoded)
