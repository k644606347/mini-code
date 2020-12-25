import { bindLog, bindTimeLog } from "./Tools";

/**
 * https://leetcode-cn.com/problems/two-sum/
 * 
 * @param nums 
 * @param target 
 */
function twoSum(nums: number[], target: number) {
    const hash: { [x: string]: number } = {};
    let result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];

        if (hash[target - item] !== undefined) {
            result = [hash[target - item], i]; break;
        } else {
            hash[item] = i;
        }
    }

    return result;
};

const log = bindTimeLog(twoSum);
log([2, 7, 11, 15], 9);
log([2, 7, 11, 15], 13);
log([2, 7, 11, 15, 22, 32, 13, 9, 0, 6, 3, 11], 3);