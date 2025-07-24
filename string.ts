namespace string {
    export let ascii_letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    export let ascii_lowercase = "abcdefghijklmnopqrstuvwxyz"
    export let ascii_uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    export function capwords(name: any): string {
        return _py.py_string_upper("" + name)
    }
    
    export let digits = "0123456789"
    export let hexdigits = "0123456789abcdefABCDEF"
    export let octdigits = "01234567"
    export let printable = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#\$%&'()*+,-./:;<=>?@[\\]^_\`\{|\}~ 	
`
    export let punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    export let whitespace = " \t\n\r\u000b\f"
}
