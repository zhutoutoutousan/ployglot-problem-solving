/**
 * @param {number[]} nums
 * @return {number}
 */
// https://www.youtube.com/watch?v=5WZl3MMT0Eg
var maxSubArray = function(nums) {
    // Dynamic Programming
    // Time: O(n)
    // Space: O(1)
    if(!nums || nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    let max = nums[0];
    let currMax = nums[0];
    for(let i = 1; i < nums.length; i++){
        currMax = Math.max(currMax + nums[i], nums[i]);
        max = Math.max(max, currMax);
    }
    return max;
};