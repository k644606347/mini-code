/**
 * 
 * https://leetcode-cn.com/problems/add-two-numbers/solution/liang-shu-xiang-jia-by-gpe3dbjds1/
 * 
 */

import { ListNode } from "../utils/types";


/**
 * time O(n)
 * space O(1)
 * @param l1 
 * @param l2 
 * @returns 
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let curNode1: ListNode | null = l1
    let curNode2: ListNode | null = l2
    let firstResult: ListNode | null = curNode1 || curNode2 ? new ListNode() : null;
    let curResult = firstResult;

    if (!curResult)
        return null

    let calcNext = true
    while (calcNext) {
        let curVal: number = curResult.val;
        if (curNode1) {
            curVal += curNode1.val
        }

        if (curNode2) {
            curVal += curNode2.val
        }

        let needCarry: boolean = curVal >= 10 ? true : false;
        curResult.val = curVal >= 10 ? curVal % 10 : curVal;

        curNode1 = curNode1 ? curNode1.next : null
        curNode2 = curNode2 ? curNode2.next : null

        if (curNode1 || curNode2 || needCarry) {
            curResult.next = new ListNode(needCarry ? 1 : 0)
            curResult = curResult.next
            calcNext = true
        } else {
            calcNext = false
        }
    }

    return firstResult;
};

console.log(addTwoNumbers(new ListNode(9), new ListNode(5)))
console.log(addTwoNumbers(new ListNode(5), new ListNode(5)))