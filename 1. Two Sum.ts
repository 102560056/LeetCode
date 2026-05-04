// Source : https://leetcode.com/problems/two-sum/
// Author : Samual Banfield
// Date   : 04/05/2026

/********************************************************************************** 
* 
* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
*
* You may assume that each input would have exactly one solution, and you may not use the same element twice.
*
* You can return the answer in any order.
*               
**********************************************************************************/

// Setup
let nums = [2,7,11,15]; let target = 9;


// Task
function twoSum(nums: number[], target: number): number[] {
    for (let i=0; i<nums.length;i++){
        for (let j=i+1; j<nums.length;j++){
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
    return [];
};

// Handle Results
let result: number[] = twoSum(nums, target);
console.log(result);


// Notes on Best Solution
/********************************************************************************** 
* The best solution used a map: Record<number, number>
* It would first compute the complement to the current number then if that complement was a value in the map 
* it would store the current number's array index (key) and the current number (value) 
**********************************************************************************/