function select(printable: boolean = false, letters: boolean = true, only_lowercase: boolean = false, only_uppercase: boolean = false): string {
    let s: string;
    let letter: string;
    let ascii_letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let ascii_lowercase = "abcdefghijklmnopqrstuvwxyz"
    let ascii_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let digits = "0123456789"
    let printable_chars = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#\$%&'()*+,-./:;<=>?@[\\]^_\`\{|\}~ 	
`
    if (printable) {
        s = printable_chars
    } else if (letters) {
        if (only_lowercase) {
            s = ascii_lowercase
        } else if (only_uppercase) {
            s = ascii_uppercase
        } else {
            s = ascii_letters
        }
        
    } else {
        s = digits
    }
    
    let symbols = s
    let index = 0
    while (true) {
        letter = symbols[index]
        basic.showString(letter)
        //  Wait for button press
        while (true) {
            if (input.buttonIsPressed(Button.B)) {
                return letter
            }
            
            //  Return current letter when Button B pressed
            if (input.buttonIsPressed(Button.A)) {
                //  Move to next letter on Button A press
                index = (index + 1) % symbols.length
                break
            }
            
            //  Exit inner while loop to show next letter
            while (control.millis() > control.millis() + 30) {
                
            }
        }
    }
}

//  Example usage
let selected_letter = select(false, true, true)
basic.showString("You picked: " + selected_letter)
