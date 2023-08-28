class DataType {
    constructor() {
        this.dataTypeMappings = {
            'Num': 'NUM',
            'String': 'STRING',
            'Dec': 'DEC',
            'Bool': 'BOOL',
            // ... other data types ...
        };
    }

    isDataType(lexeme) {
        return lexeme in this.dataTypeMappings;
    }
}

export default DataType;