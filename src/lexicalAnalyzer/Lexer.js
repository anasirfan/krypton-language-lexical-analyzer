import Token from './Token'; 
import Keyword from '../lexemes/Keyword'; 
import DataType from '../lexemes/DataType'; 
import Operator from '../lexemes/Operator'; 
import Punctuator from '../lexemes/Punctuator'; 
import WordBreaker from '../lexemes/WordBreaker';
import Literal from '../lexemes/Literal';

class Lexer {
    constructor(code) {
        this.code = code;
        this.keywords = new Keyword(); 
        this.dataTypes = new DataType(); 
        this.operators = new Operator(); 
        this.punctuators = new Punctuator(); 
        this.wordBreaker = new WordBreaker();
        this.literal = new Literal();
        this.lineNumber = 1;
    }

    tokenize() {
        const lexemes = this.wordBreaker.splitCode(this.code);
        const tokens = [];

        console.log('lexems: ' + lexemes);

        lexemes.forEach(lexeme => {
            if (lexeme === '\n') {
                this.lineNumber++; 
                return;
            }

            const token = this.getTokenType(lexeme);
            console.log("lexeme: " + lexeme + " token: " + token);
            if (token) {
                tokens.push(new Token(token.type, lexeme, this.lineNumber));
            }
        });

        console.log(tokens);

        return tokens;
    }

    getTokenType(lexeme) {

          if (this.keywords.isKeyword(lexeme)) {
            return { type: 'Keyword' };
        } else if (this.dataTypes.isDataType(lexeme)) {
            return { type: 'DataType' };
        } else if (this.operators.isOperator(lexeme)) {
            return { type: 'Operator' };
        } else if (this.punctuators.isPunctuator(lexeme)) {
            return { type: 'Punctuator' };
        } else if (this.literal.isNumericLiteral(lexeme)) {
            return { type: 'NumericLiteral' };
        } else if (this.literal.isStringLiteral(lexeme)) {
            return { type: 'StringLiteral' };
        } else {
            return { type: 'Unknown' };
        }
    }
}

export default Lexer;
