function jump(nums: number[]) {

    const dp = Array(nums.length);

    dp[0] = 0;
    for (let i = 1; i < dp.length; i++) {
        dp[i] = nums.length + 1;
    }

    console.log(dp);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (j + nums[j] >= i) {
                dp[i] = Math.min(dp[i], dp[j] + 1);
                console.log(dp[i], i, j);
            }
        }
    }

    console.log(dp);
    return dp[dp.length - 1];
}

console.log(jump([2,3,1,1,4]));