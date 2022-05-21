/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    // Dynamic Programming
    // Time: O(n)
    // Space: O(1)
    if(!nums || nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    let max = nums[0];
    let currMax = nums[0];
    let min = nums[0];
    let currMin = nums[0];
    let sum = nums[0];
    for(let i = 1; i < nums.length; i++){
        currMax = Math.max(currMax + nums[i], nums[i]);
        max = Math.max(max, currMax);
        currMin = Math.min(currMin + nums[i], nums[i]);
        min = Math.min(min, currMin);
        sum += nums[i];
    }
    if(sum === min) return max;
    return Math.max(max, sum - min);
};