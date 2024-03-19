characterSet = {
    ' ': 1,
    'a': 2,
    'b': 3,
    'c': 4,
    'd': 5,
    'e': 6,
    'f': 7,
    'g': 8,
    'h': 9,
    'i': 10,
    'j': 11,
    'k': 12,
    'l': 13,
    'm': 14,
    'n': 15,
    'o': 16,
    'p': 17,
    'q': 18,
    'r': 19,
    's': 20,
    't': 21,
    'u': 22,
    'v': 23,
    'u': 24,
    'v': 25,
    'w': 26,
    'x': 27,
    'y': 28,
    'z': 29,
    'A': 30,
    'B': 31,
    'C': 32,
    'D': 33,
    'E': 34,
    'F': 35,
    'G': 36,
    'H': 37,
    'I': 38,
    'J': 39,
    'K': 40,
    'L': 41,
    'M': 42,
    'N': 43,
    'O': 44,
    'P': 45,
    'Q': 46,
    'R': 47,
    'S': 48,
    'T': 49,
    'U': 50,
    'V': 51,
    'W': 52,
    'X': 53,
    'Y': 54,
    'Z': 55,
    '!': 56,
    '@': 57,
    '£': 58,
    '$': 59,
    '%': 60,
    '^': 61,
    '&': 62,
    '*': 63,
    '(': 64,
    ')': 65,
    '-': 66,
    '_': 67,
    '=': 68,
    '+': 69,
    '[': 70,
    ']': 71,
    '{': 72,
    '}': 73,
    ';': 74,
    ':': 75,
    '\'': 76,
    '\"': 77,
    '\'': 78,
    '\|': 79,
    ',': 80,
    '.': 81,
    '<': 82,
    '>': 83,
    '/': 84,
    '?': 85,
    "\`": 86,
    "\~": 87,
    "\§": 88,
    "\±": 89,
    '1': 90,
    '2': 91,
    '3': 92,
    '4': 93,
    '5': 94,
    '6': 95,
    '7': 96,
    '8': 97,
    '9': 98,
    '0': 99
}


class letterNumber {
    constructor() {

    }
    Encrypt(message, offset) {
        let newMessage = [];
        for (let i = 0; i < message.length; i++) {
            let value = characterSet[message[i]] + offset;
            if (value > 99) {
                do {
                    value = value - 99;
                } while (value > 99);
            } if (value < 10) {
                let newValue = '0' + value.toString();
                newMessage += newValue;
            } else {
                newMessage += value.toString();
            }

        }
        return console.log(newMessage);

    }
}
//const product = new letterNumber();
//product.Encrypt("hello", 1000);