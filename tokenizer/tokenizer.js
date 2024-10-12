/*
Author: Knox
Build: 1
-------------------
Goal:
- Implement a simple tokenizer to convert a string input into tokens.

Tasks:
- Sprint 1: Task 1: Set up the folder structure
- Sprint 1: Task 2: Define token types and implement tokenizer
- Sprint 1: Task 3: Write tests to verify tokenizer
*/

// File: tokenizer/tokenizer.js
function tokenize(input) {
    const tokens = [];
    const tokenTypes = [
        { type: 'number', regex: /\d+/ },
        { type: 'operator', regex: /[+\-*/]/ },
        { type: 'paren', regex: /[()]/ }
    ];

    let i = 0;
    while (i < input.length) {
        const char = input[i];

        if (/\s/.test(char)) {
            // Skip whitespace
            i++;
            continue;
        }

        let matched = false;
        for (let { type, regex } of tokenTypes) {
            const match = input.slice(i).match(regex);
            if (match && match.index === 0) {
                tokens.push({ type, value: match[0] });
                i += match[0].length;
                matched = true;
                break;
            }
        }

        if (!matched) {
            throw new Error(`Unexpected character: ${char}`);
        }
    }
    return tokens;
}

module.exports = { tokenize };
