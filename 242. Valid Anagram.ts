// Source : https://leetcode.com/problems/valid-anagram/
// Author : Samual Banfield
// Date   : 05/05/2026

/********************************************************************************** 

Given two strings s and t, return true if t is an of s, and false otherwise.

Example:
Input: s = "anagram", t = "nagaram"
Output: true
              
**********************************************************************************/

//Setup
let s = "anagram"; let t = "nagaram";
// let s = "anagram"; let t = "nagaramp";

//Task
function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false;

    const map: Record<string, number> = {};

    for (const c  of s) {
        map[c] =  map[c] === undefined ?  1 : map[c] += 1;
    }
    for (const c  of t) {
        if(map[c] === undefined || map[c] === 0) return false;
        map[c] -=1;
    }
    return true;
};

//Handle Results
console.log(isAnagram(s,t))

// Notes on Best Solution
/********************************************************************************** 
The best solution simply used a single static 26 len array 
It would first check that both both lens of strings are equal and then itterate over a both arrays at once adding and subtracting from the total
Then ultimately itterating over the 26 len array to check if it was empty
**********************************************************************************/