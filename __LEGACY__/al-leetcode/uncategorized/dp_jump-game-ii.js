// https://leetcode.com/problems/jump-game-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var jumpGameTwo = function(nums) {
    // Dynamic Programming
    // Time: O(n)
    // Space: O(1)
    if(!nums || nums.length === 0) return 0;
    if(nums.length === 1) return 0;
    let max = 0;
    let currMax = 0;
    let steps = 0;
    for(let i = 0; i < nums.length; i++){
        if(i > max){
            steps++;
            max = currMax;
        }
        currMax = Math.max(currMax, i + nums[i]);
    }
    return steps;
};