/**
 * @param {number[]} nums
 * @return {number}
 */
// 3 houses analysis
// [3,6,2]
// 1. Compare first two: currMax: 6, prevMax: 3
// 2. Compare prevMax+thishouse: 5, currMax: 6
// 3. 6 is max, prevMax: 6, currMax: 6

// +1 analysis
// [3,6,2,9]
// duh

var rob = function(nums) {
    // Dynamic Programming
    // Time: O(n)
    // Space: O(1)
    if(!nums || nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    let prevMax = nums[0];
    let currMax = Math.max(nums[0], nums[1]);
    for(let i = 2; i < nums.length; i++){
        let temp = currMax;
        currMax = Math.max(prevMax + nums[i], currMax);
        prevMax = temp;
    }
    return currMax;
};