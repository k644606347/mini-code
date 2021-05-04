/**
 * https://leetcode-cn.com/problems/climbing-stairs/
 * 
 * @param n 
 * @returns 
 */
function climbStairs(n: number): number {
    const counts: number[] = [1, 2];

    if (n <= 2) {
        return n;
    }

    for (let i = 2, len = n; i < n; i++) {
        counts[i] = counts[i - 1] + counts[i - 2]
    }

    return counts[counts.length - 1]
};

console.log(climbStairs(10))