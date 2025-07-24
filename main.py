from microbit import *

def select(printable=False, letters=True, only_lowercase=False, only_uppercase=False):
    ascii_letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    ascii_lowercase = "abcdefghijklmnopqrstuvwxyz"
    ascii_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    digits = "0123456789"
    printable_chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ \t\n\r\x0b\x0c"

    if printable:
        s = printable_chars
    elif letters:
        if only_lowercase:
            s = ascii_lowercase
        elif only_uppercase:
            s = ascii_uppercase
        else:
            s = ascii_letters
    else:
        s = digits

    symbols = list(s)

    index = 0
    while True:
        letter = symbols[index]
        basic.show_string(letter)

        # Wait for button press
        while True:
            if button_b.is_pressed():
                return letter  # Return current letter when Button B pressed
            if button_a.is_pressed():
                # Move to next letter on Button A press
                index = (index + 1) % len(symbols)
                break  # Exit inner while loop to show next letter
            sleep(100)  # Small delay to avoid busy waiting

# Example usage
selected_letter = select(printable=False, letters=True, only_lowercase=True)
display.scroll("You picked: {}".format(selected_letter))
