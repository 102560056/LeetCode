// Source : https://leetcode.com/problems/palindrome-number
// Author : Samual Banfield
// Date   : 07/05/2026 

/********************************************************************************** 

Given an integer x, return true if x is a palindrome, and false otherwise.

**********************************************************************************/

//Setup
const x = 121

//Task
function isPalindrome(x: number): boolean {
    return x.toString() === x.toString().split('').reverse().join('');
};

//Handle Results
console.log(isPalindrome(x))


// Notes on Best Solution
/********************************************************************************** 

Any negative numbers should automatically be returned as false because of the '-'
This alone pushes it from the bottom 1% to the top %33

**********************************************************************************/

