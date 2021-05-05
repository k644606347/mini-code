/**
 * https://leetcode-cn.com/problems/binary-search/submissions/
 * 二分查找
 * time O(logN)
 * space O(1)
 * @param nums 
 * @param target 
 * @returns 
 */
function search(nums: number[], target: number): number {
    let begin = 0, end = nums.length - 1, pivot = 0

    while (begin <= end) {
        pivot = begin + Math.floor((end - begin) / 2) // 这里无论使用Math.ceil / Math.floor，结果是一致的
        if (target < nums[pivot]) {
            end = pivot - 1
        } else if (target > nums[pivot]) {
            begin = pivot + 1
        } else {
            // 对于重复出现的值，返回最先出现的index
            return nums[begin] === nums[pivot] ? begin : pivot
        }
    }

    return -1
};

console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search([9, 11, 22], 11))
console.log(search([9], 9))
console.log(search([1, 2, 6, 9, 9, 9], 9))