// Source : https://leetcode.com/problems/two-sum/
// Author : Samual Banfield
// Date   : 04/05/2026

/********************************************************************************** 

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:              
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

**********************************************************************************/

// Setup
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

let l1 = new ListNode(2, new ListNode(4, new ListNode(3))); // [2,4,3]
let l2 = new ListNode(5, new ListNode(6, new ListNode(4))); // [5,6,4]

// Task

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let l3 = new ListNode(0); let temp = l3; let carry =0;
    while (l1 !== null || l2 !== null || carry !== 0) {
        let val1 = l1 ? l1.val : 0  
        let val2 = l2 ? l2.val : 0  

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum/10);
        temp.next = new ListNode(sum%10);
        temp = temp.next

        if(l1 !== null) l1 = l1?.next;
        if(l2 !== null) l2 = l2?.next;
    }
    return l3.next;
};

// Handle Results
console.log(addTwoNumbers(l1, l2));