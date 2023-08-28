class Token {
    constructor(type, lexeme, lineNumber) {
        this.type = type;
        this.lexeme = lexeme;
        this.lineNumber = lineNumber;
    }

    toString() {
        return `Type: ${this.type}, Lexeme: ${this.lexeme}, Line: ${this.lineNumber}`;
    }
}

export default Token;
