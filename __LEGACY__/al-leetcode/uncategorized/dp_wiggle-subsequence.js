/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    // Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....
    // Example:
    // Input: nums = [3,5,2,1,6,4]
    // Output: One possible answer is [3,5,1,6,2,4]
    // 
    // DP
    // O(n)
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return 1;
    }
    let dp = new Array(nums.length).fill(0);
    let max = 0;
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i < nums.length; i++) {
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