/**
 * @param {number[]} height
 * @return {number}
 */
// https://www.youtube.com/watch?v=ZI2z5pq0TqA
// Videomark: 5:49/23:21
var trap = function(height) {
    // Trap rain water
    // O(n)
    // O(n)
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    return water;
};