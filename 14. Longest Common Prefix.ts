// Source : https://leetcode.com/problems/longest-common-prefix
// Author : Samual Banfield
// Date   : 13/05/2026

/********************************************************************************** 

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".      

Example:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.

**********************************************************************************/

//Setup
const strs = ["flower","flow","flight"]

//Task
function longestCommonPrefix(strs: string[]): string {
    
    // O(n) search over list for shortest string
    let shortestStringLen:number = Infinity;
    for (let i = 0; i < strs.length; i++) {
        if(strs[i].length < shortestStringLen){
            shortestStringLen = strs[i].length;
        }
    }

    let low:number = 0; 
    let high:number = shortestStringLen;
    let mid:number;

    // O(log(n)) Binary check 
    while (high !== low){
        mid = low + Math.ceil((high - low) / 2);
        if(checkPrefix(strs,mid)){
            low = mid;
        }
        else{
            high = mid -1;
        }
    }

    return strs[0].substring(0,high);
};

function checkPrefix(strs: string[], at: number): boolean{
    const prefix = strs[0].substring(0,at);
    for (let i = 0; i < strs.length; i++) {
        if(strs[i].substring(0,at) !== prefix){
            return false;
        }
    }
    return true;    
}

//Handle Results
console.log(longestCommonPrefix(strs));