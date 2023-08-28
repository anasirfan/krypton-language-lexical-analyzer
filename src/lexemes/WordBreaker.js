class WordBreaker {
    constructor() {
        this.wordBreakers = [' ', '\n', '\t', '\r', '.', '"', '\''];
        this.punctuatorMappings = {
            ":": true,
            ",": true,
            ".": true,
            "(": true,
            ")": true,
            "{": true,
            "}": true,
            "[": true,
            "]": true,
            ";": true,
        };
        this.operatorMappings = {
            "+=": true,
            "-=": true,
            "/=": true,
            "*=": true,
            "++": true,
            "--": true,
            "+": true,
            "-": true,
            "*": true,
            "/": true,
            "%": true,
            "&&": true,
            "||": true,
            "<=": true,
            ">=": true,
            "!=": true,
            "==": true,
            "!": true,
            ">": true,
            "<": true,
            "=": true,
        };
    }

    splitCode(code) {
        const lexemes = [];
        let currentLexeme = '';

        for (const char of code) {
            if (this.wordBreakers.includes(char)) {
                if (currentLexeme !== '') {
                    lexemes.push(currentLexeme);
                    currentLexeme = '';
                }
                if (char === '\n') {
                    lexemes.push('\n');
                }
            } else if (this.punctuatorMappings[char] || this.operatorMappings[char]) {
                if (currentLexeme !== '') {
                    lexemes.push(currentLexeme);
                }
                lexemes.push(char);
                currentLexeme = '';
            } else {
                currentLexeme += char;
            }
        }

        if (currentLexeme !== '') {
            lexemes.push(currentLexeme);
        }

        return lexemes;
    }}

export default WordBreaker;
