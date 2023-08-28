class Operator {
    constructor() {
        this.operatorMappings = {
            "+=": "COMPOUND_EQUAL_PLUS",
            "-=": "COMPOUND_EQUAL_MINUS",
            "/=": "COMPOUND_EQUAL_DIVIDE",
            "*=": "COMPOUND_EQUAL_MULTIPLY",
            "++": "INCREMENT_DECREMENT_PLUS",
            "--": "INCREMENT_DECREMENT_MINUS",
            "+": "PLUS_MINUS",
            "-": "PLUS_MINUS",
            "*": "MULTIPLY_DIVIDE_MODULUS",
            "/": "MULTIPLY_DIVIDE_MODULUS",
            "%": "MULTIPLY_DIVIDE_MODULUS",
            "&&": "AND",
            "||": "OR",
            "<=": "RELATIONAL_OPERATOR",
            ">=": "RELATIONAL_OPERATOR",
            "!=": "RELATIONAL_OPERATOR",
            "==": "RELATIONAL_OPERATOR",
            "!": "NOT",
            ">": "RELATIONAL_OPERATOR",
            "<": "RELATIONAL_OPERATOR",
            "=": "EQUAL",
        };
    }

    isOperator(lexeme) {
        return lexeme in this.operatorMappings;
    }
}

export default Operator;
