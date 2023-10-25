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
    const splitExpr = [];
    for (let i = 0; i < expr.length; i += 10) {
        splitExpr.push(expr.substring(i, i + 10));
    }

    const newArr = splitExpr.map((elem) => {
        return Number(elem).toString().replaceAll('10', '.').replaceAll('11', '-');
    });

    const result = newArr.map((elem) => {
        return elem === 'NaN' ? ' ' : MORSE_TABLE[elem];
    });

    return result.join('');
}

module.exports = {
    decode
}