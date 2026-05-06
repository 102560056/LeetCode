// Source : https://leetcode.com/problems/valid-palindrome
// Author : Samual Banfield
// Date   : 06/05/2026 

/********************************************************************************** 
* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
* it reads the same forward and backward. Alphanumeric characters include letters and numbers.
*               
**********************************************************************************/

//Setup
let s : string  = " ";

//Task
function isPalindrome(s: string): boolean {
    //Strip out non alpha-numeric characters
    s = s.toLowerCase();
    
    const stripped = s.match(/[a-zA-Z]/g);
    if(stripped === null || stripped.length === 0) return true;
    for (let i = 1; i < stripped.length; i++) {
        if(stripped[i-1] !== stripped[stripped.length-i])return false;
    }
    return true;
};

//Handle Results
console.log(isPalindrome(s))