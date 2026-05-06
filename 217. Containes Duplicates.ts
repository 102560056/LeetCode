// Source : https://leetcode.com/problems/contains-duplicate/
// Author : Samual Banfield
// Date   : 04/05/2026

/********************************************************************************** 

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
              
**********************************************************************************/

// Setup
let nums:number[] = [1,2,3,1];

// Task
function containsDuplicate(nums: number[]): boolean {
    let map = new Map<number, boolean>;
    
    for (let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])){
            return true
        }
        map.set(nums[i],true);
    }
    return false;
};

// Handle results
console.log(containsDuplicate(nums))

// Notes
/********************************************************************************** 
*
* I also attempted to use the built in Set Type however it ran slower than my initial solution.
* 
* function containsDuplicate(nums: number[]): boolean {
    const mySet = new Set<number>()

    for(const el of nums){
        if(mySet.has(el)) return true
        mySet.add(el)
    }

    return false;
}
**********************************************************************************/