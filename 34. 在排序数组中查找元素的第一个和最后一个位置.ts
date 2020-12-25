/**
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 * @param nums 
 * @param target 
 */
function searchRange(nums: number[], target: number): number[] {
    let left = 0, right = nums.length - 1;
    let midIndex = Math.floor((right - left) / 2 + left);
    while (target !== nums[midIndex]) {
        if (left >= right) {
            midIndex = -1;
            break;
        }

        if (target < nums[midIndex]) {
            right = midIndex;
        } else {
            left = midIndex + 1;
        }
        midIndex = Math.floor((right - left) / 2 + left);
    }

    if (midIndex === -1)
        return [-1, -1];
    let midVal = nums[midIndex];

    let startIndex = midIndex,
        endIndex = midIndex;

    while (nums[startIndex - 1] === midVal || nums[endIndex + 1] === midVal) {
        if (nums[startIndex - 1] === midVal) {
            startIndex--;
        }
        if (nums[endIndex + 1] === midVal) {
            endIndex++;
        }
    }

    return [startIndex, endIndex];
};

function searchRange2(nums: number[], target: number) {
    return [nums.indexOf(target),nums.lastIndexOf(target)]
};

// console.log(searchRange([1, 4], 4));
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([1, 3, 4, 5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange2([1, 3, 4, 5, 7, 7, 8, 8, 10], 8));

let arr1 = new Array(300000);
for (let i = 0; i < arr1.length; i++) {
    arr1[i] = i + 1;
}

console.time();
console.log(searchRange(arr1, 15000));
console.timeEnd();

console.time();
console.log(searchRange2(arr1, 15000));
console.timeEnd();