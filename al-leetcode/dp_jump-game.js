/**
 * @param {number[]} nums
 * @return {boolean}
 */
// https://leetcode.com/problems/jump-game/
// Q: Isn't that num overflow?
var canJump = function(nums) {
    // Dynamic Programming
    // Time: O(n)
    // Space: O(1)
    if(!nums || nums.length === 0) return false;
    if(nums.length === 1) return true;
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        if(i > max) return false;
        max = Math.max(max, i + nums[i]);
    }
    return true;
};