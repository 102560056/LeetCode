// Source : https://leetcode.com/problems/valid-parentheses
// Author : Samual Banfield
// Date   : 18/05/2026

/********************************************************************************** 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.            
**********************************************************************************/

//Setup
// const s:string = "()[]{}"
const s:string = "([)]"

//Task
function isValid(s: string): boolean {
    const stack : string[] = []
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        switch (c) {
            case '[':
            case '(':
            case '{':
                stack.push(c);
                break;
            case ']':
                if (stack.pop() !== '[') return false;
                break;
            case ')':
                if (stack.pop() !== '(') return false;
                break;
            case '}':
                if (stack.pop() !== '{') return false;
                break;
        }
    }
    return stack.length === 0;
};

//Handle Results
console.log(isValid(s));

// Notes from Better solutions
/********************************************************************************** 
Essentially the same core concept with slightly different execution.
Uses a Hashmap for the opening and closing bracket links instead of a switch.
**********************************************************************************/