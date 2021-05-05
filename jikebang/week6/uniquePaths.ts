/**
 * 
 * https://leetcode-cn.com/problems/unique-paths/submissions/
 * 
 * 递归分治
 * 时间复杂度 O(m * n)
 * @param m 
 * @param n 
 * @returns 
 */
function uniquePaths(m: number, n: number): number {
    const caches: {[k in string]: number} = {}
    function recur(x: number, y: number) {
        let cache = caches[x + '-' + y];
        if (cache !== undefined) {
            return cache;
        }
        if (x > m || y > n) {
            return 0;
        }

        if (x === m && y === n) {
            return 1;
        }

        cache = caches[x + '-' + y] = recur(x + 1, y) + recur(x, y + 1);

        return cache;
        // return recur(x + 1, y) + recur(x, y + 1);
    }

    return recur(1, 1);
};

/**
 * dp
 * 时间复杂度 O(m * n)
 * @param m 
 * @param n 
 * @returns 
 */
function uniquePaths2(m: number, n: number): number {
    const pathArr = new Array(m);
    pathArr.fill(new Array(n));

    for (let i = m - 1; i >= 0; i--) {
        pathArr[i][n - 1] = 1;
    }
    for (let i = n - 1; i >= 0; i--) {
        pathArr[m - 1][i] = 1;
    }

    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            pathArr[i][j] = pathArr[i + 1][j] + pathArr[i][j + 1]
        }
    }

    return pathArr[0][0];
};