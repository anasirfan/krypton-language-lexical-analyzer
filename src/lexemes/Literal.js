class Literal {
    constructor() {
        this.numericRegex = /^[0-9]+$/;
        this.stringRegex = /^".*"$/;
    }

    isNumericLiteral(lexeme) {
        return this.numericRegex.test(lexeme);
    }

    isStringLiteral(lexeme) {
        return this.stringRegex.test(lexeme);
    }
}

export default Literal;
