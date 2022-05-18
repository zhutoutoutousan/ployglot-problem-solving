/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    //   Now the houses are arranged in a circle.
    //   The first house is the leader and each one wants to be the leader of the next house.
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }

    // Make two numsArray, one without the first house, one without the last house.
    let numsArray = nums.slice(1, nums.length);
    let numsArray1 = nums.slice(0, nums.length - 1);
console.log(numsArray);
console.log(numsArray1);
    return Math.max(robHelper(numsArray), robHelper(numsArray1));
};

var robHelper = function(nums, start, end) {
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