class Keyword {
    constructor() {
        this.keywordMappings = {
            'break': 'BREAK',
            'continue': 'CONTINUE',
            'class': 'CLASS',
            'else': 'ELSE',
            'if': 'IF',
            'cycle': 'CYCLE',
            'using': 'USING',
            'void': 'VOID',
            'return': 'RETURN',
            'static': 'STATIC',
            'this': 'THIS',
            'super': 'SUPER',
            'public': 'PUBLIC',
            'private': 'PRIVATE',
            'interface': 'INTERFACE',
            'executes': 'EXECUTES',
            'inherits': 'INHERITS',
            'protected': 'PROTECTED',
            // ... other keywords ...
        };
    }

    isKeyword(lexeme) {
        return lexeme in this.keywordMappings;
    }
}

export default Keyword;