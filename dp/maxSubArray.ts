/**
 * https://leetcode-cn.com/problems/maximum-subarray/submissions/
 */

const { log } = console

/**
 * 动态规划
 * time O(n)
 * space O(n)
 * @param nums 
 * @returns 
 */
function maxSubArray(nums: number[]): number {
    if (nums.length === 0)
        return 0;

    const dp: number[] = [nums[0]]

    for (let i = 1; i <= nums.length - 1; i++) {
        dp[i] = Math.max(0, dp[i - 1]) + nums[i]
    }

    return dp.sort((a, b) => b - a)[0]
}

log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
log(maxSubArray([1, 2, 3, -1, 4, 5]))

/**
 * 暴力求解 
 * time O(n^2)
 * space O(1)
 * @param nums 
 * @returns 
 */
function maxSubArray2(nums: number[]): number {
    let maxVal = nums[0]

    for (let i = 0; i <= nums.length - 1; i++) {
        let count = nums[i];
        for (let j = i + 1; j <= nums.length - 1; j++) {
            count += nums[j]
            if (count > maxVal)
                maxVal = count
        }
    }

    return maxVal
}

log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
log(maxSubArray2([1, 2, 3, -1, 4, 5]))

export {}