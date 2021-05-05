const {log} = console
/**
 * https://leetcode-cn.com/problems/min-cost-climbing-stairs/
 * 
 * @param cost 
 * @returns 
 */
function minCostClimbingStairs(cost: number[]): number {
    let size = cost.length;
    const minCost: number[] = new Array(cost.length);
    minCost[0] = 0;
    minCost[1] = Math.min(cost[0], cost[1]);
    for (let i = 2; i < size; i++) {
        minCost[i] = Math.min(minCost[i - 1] + cost[i], minCost[i - 2] + cost[i - 1]);
    }
    return minCost[size - 1];
};

log(minCostClimbingStairs([10,5,2]))

export {}