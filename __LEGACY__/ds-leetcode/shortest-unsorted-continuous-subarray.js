// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
// Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.
// Return the shortest such subarray and output its length.
// Input: nums = [2,6,4,8,10,9,15]
// Output: 5
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestUnsortedSubarray = function(nums) {
    // if nums is sorted, return 0
    var isSorted = function (nums) {
        for (var i = 1; i < nums.length; i++) {
            if (nums[i] < nums[i - 1]) {
                return false;
            }
        }
        return true;
    }

    if (isSorted(nums)) {
        return 0;
    }

    var n = nums.length;
    var i = 0;
    var j = n - 1;
    var min = nums[n - 1];
    var max = nums[0];
    for (i = 1; i < n; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    var minIndex = -1;
    var maxIndex = -1;
    for (i = 0; i < n; i++) {
        if (nums[i] > min) {
            minIndex = i;
            break;
        }
    }
    for (j = n - 1; j >= 0; j--) {
        if (nums[j] < max) {
            maxIndex = j;
            break;
        }
    }
    if (minIndex == -1) {
        return n;
    }
    if (maxIndex == -1) {
        return n;
    }
    return maxIndex - minIndex + 1;
};