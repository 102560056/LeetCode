// Source : https://leetcode.com/problems/roman-to-integer/
// Author : Samual Banfield
// Date   : 12/05/2026

/********************************************************************************** 
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Given a roman numeral, convert it to an integer.
**********************************************************************************/

//Setup
const s = "XXIV";

//Task
function romanToInt(s: string): number {
    let sum = 0;
    const values : Record<string,number> = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    };

    for (let i = 0; i < s.length; i++) {
        const current = values[s[i]];
        const next = values[s[i + 1]] ?? 0;
        if (current >= next) {
            sum+=current;
        }
        else{
            sum-=current;
        }
    }
    return sum;
};

//Handle Results
console.log(romanToInt(s))