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
    
    let symbols = []
    for (letter of s) {
        symbols.push(letter)
    }
    //  Show each letter on the Micro:bit display
    while (true) {
        for (letter of symbols) {
            while (!input.buttonIsPressed(Button.A)) {
                basic.showString(letter)
            }
            if (input.buttonIsPressed(Button.B)) {
                return letter
            }
            
        }
    }
}

//  Example usage
select(false, true, true)
