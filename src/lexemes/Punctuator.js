class Punctuator {
    constructor() {
        this.punctuatorMappings = {
            ":": "COLON",
            ",": "COMMA",
            ".": "DOT",
            "(": "OPENING_PARANTHESES",
            ")": "CLOSING_PARANTHESES",
            "{": "OPENING_CURLY_BRACKET",
            "}": "CLOSING_CURLY_BRACKET",
            "[": "OPENING_SQUARE_BRACKET",
            "]": "CLOSING_SQUARE_BRACKET",
        };
    }

    isPunctuator(lexeme) {
        return lexeme in this.punctuatorMappings;
    }
}

export default Punctuator;
