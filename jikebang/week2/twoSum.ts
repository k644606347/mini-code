const {log} = console
function twoSum(nums: number[], target: number): number[] {
    const temp: any = {}

    // for (let i = 0; i < nums.length; i++) {
    //     if (temp[target - nums[i]] !== undefined) {
    //         return [temp[target - nums[i]], i]
    //     }
    //     temp[nums[i]] = i
    // }
    for (let i = 0; i < nums.length; i++) {
        if (temp[nums[i]] !== undefined) {
            return [temp[nums[i]], i]
        }
        temp[target - nums[i]] = i
    }

    return []
}

log(twoSum([4], 4))
log(twoSum([4,2,4,2,5], 9))
export {}