/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // Longest Increasing Subsequence
    // O(n^2)
    if (nums.length === 0) {
        return 0;
    }

    let dp = new Array(nums.length).fill(0);
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        max = Math.max(max, dp[i]);
    }
    return max;
};
