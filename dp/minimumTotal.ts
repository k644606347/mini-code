/**
 * https://leetcode-cn.com/problems/triangle/solution/
 */

/**
 * bottom-up, O(n) space
 * 
 * @param triangle 
 * @returns 
 */
function minimumTotal(triangle: number[][]): number {
    const dp = triangle[triangle.length - 1]

    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j <=i; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
        }
    }

    return dp[0]
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))


/**
 * top-down O(n*n/2) space
 * @param triangle 
 * @returns 
 */
function minimumTotal2(triangle: number[][]): number {
    const dp: number[][] = new Array(triangle.length)

    dp[0] = []
    dp[0][0] = triangle[0][0]
    for (let i = 1; i <= triangle.length - 1; i++) {
        dp[i] = []
        for (let j = 0; j <= triangle[i].length - 1; j++) {
            if (j === 0) {
                dp[i][j] = dp[i - 1][j] + triangle[i][j]
            } else if (j === triangle[i].length - 1) {
                dp[i][j] = dp[i - 1][j - 1] + triangle[i][j]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j]
            }
        }
    }

    console.log(dp)
    return dp[dp.length - 1].sort((a, b) => a - b)[0]
};

console.log(minimumTotal2([[2],[3,4],[6,5,7],[4,1,8,3]]))