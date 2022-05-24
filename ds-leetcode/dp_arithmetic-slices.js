/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    // Dynamic Programming
    // O(n^2)
    // O(n)
    let dp = new Array(nums.length).fill(0);
    let sum = 0;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            dp[i] = dp[i - 1] + 1;
            sum += dp[i];
        }
    }
    return sum;
};