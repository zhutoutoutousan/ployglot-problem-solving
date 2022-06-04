/**
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode.com/problems/maximum-product-subarray/submissions/
var maxProduct = function(nums) {
    // Dynamic programming
    // Time: O(n)
    // Space: O(1)
    if(!nums || nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    let max = nums[0];
    let min = nums[0];
    let currMax = nums[0];
    let currMin = nums[0];
    for(let i = 1; i < nums.length; i++){
        // Negative numbercase
        if(nums[i] < 0){
            let temp = currMax;
            currMax = currMin;
            currMin = temp;
        }
        currMax = Math.max(currMax * nums[i], nums[i]);
        currMin = Math.min(currMin * nums[i], nums[i]);
        max = Math.max(max, currMax);
    }
    return max;
};