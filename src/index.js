const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let newArray = expr.match(/.{1,10}/g);
  
    let phrase = '';
    let morseChar = '';
    
    for (let i = 0; i < newArray.length; i++) {
      const encodedBinary = newArray[i];
      
      if (encodedBinary !== '**********') {
        
         for (let j = 0; j < encodedBinary.length ; j = j + 2) {
           if (encodedBinary.slice(j, j + 2) === '00') {
         
          } else if (encodedBinary.slice(j, j + 2) === '10') {
            morseChar = `${morseChar}.`;
          } else if (encodedBinary.slice(j, j + 2) === '11') {
            morseChar = `${morseChar}-`;
          }
        } 
        const char = MORSE_TABLE[morseChar];
        phrase = `${phrase}${char}`;
        morseChar = '';
      } else {
        morseChar = `${morseChar} `;
        const char = morseChar;
        phrase = `${phrase}${char}`;
        morseChar = '';
      }
    }
    return phrase;
} 

module.exports = {
    decode
}