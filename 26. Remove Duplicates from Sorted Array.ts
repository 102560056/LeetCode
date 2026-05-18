// Source : https://leetcode.com/problems/remove-duplicates-from-sorted-array
// Author : Samual Banfield
// Date   : 19/05/2026

/********************************************************************************** 
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.            
**********************************************************************************/

//Setup
const nums : number[] = [1,1,2]

//Task
function removeDuplicates(nums: number[]): number {
    let uniqueNums = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i-1]){
            nums[uniqueNums] = nums[i];
            uniqueNums++
        }
    }
    nums.length = uniqueNums;
    return uniqueNums+1;
};

//Handle Results
console.log(removeDuplicates(nums))

//Notes from best solution
/********************************************************************************** 
Didnt need to account for nums being length 0 as per the constraints.
So we can assume the first number will     
**********************************************************************************/