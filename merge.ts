/**
 * https://leetcode-cn.com/problems/merge-intervals/
 * @param intervals 
 */
function merge(intervals: number[][]): number[][] {
    intervals.sort(((a, b) => a[0] - b[0]));
    let ans = [];
    let index = -1;
    for (let interval of intervals) {
        if (index == -1 || interval[0] > ans[index][1]) {
            ans.push(interval);
            index++;
        } else {
            ans[index][1] = Math.max(ans[index][1], interval[1]);
        }
    }
    return ans;
};

console.log(merge([[1,3],[3,6],[8,10],[15,18]]));
