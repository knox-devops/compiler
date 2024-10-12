/**
 * @file tokenizer-tests.js
 * 
 * Author: Knox
 * Build Number: 1
 * 
 * ------------------------------------------------------------
 * Goal: Test the functionality of the tokenizer.
 * Tasks:
 * - Write test cases to verify tokenizer behavior.
 * - Ensure correct tokens are generated for various expressions.
 * ------------------------------------------------------------
 */

const { tokenize,Token } = require('../tokenizer/tokenizer.js');

function runTests() {
    // Test cases for the tokenizer
    const testCases = [
        { input: '3 + 4', expected: [
            new Token('Number', 3),
            new Token('Operator', '+'),
            new Token('Number', 4)
        ]},
        { input: '(1 * 2)', expected: [
            new Token('Parenthesis', '('),
            new Token('Number', 1),
            new Token('Operator', '*'),
            new Token('Number', 2),
            new Token('Parenthesis', ')')
        ]},
        { input: '5 - (3 / 2)', expected: [
            new Token('Number', 5),
            new Token('Operator', '-'),
            new Token('Parenthesis', '('),
            new Token('Number', 3),
            new Token('Operator', '/'),
            new Token('Number', 2),
            new Token('Parenthesis', ')')
        ]}
    ];

    // Run each test case
    testCases.forEach(({ input, expected }) => {
        const result = tokenize(input);
        console.assert(JSON.stringify(result) === JSON.stringify(expected), `Test failed for input: "${input}"`);
    });
    
    console.log('All tests passed!');
}

// Run the tests
runTests();
