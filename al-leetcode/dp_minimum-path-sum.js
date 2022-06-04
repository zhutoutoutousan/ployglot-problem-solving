// https://leetcode.com/problems/minimum-path-sum/submissions/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    // Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
    // Note: You can only move either down or right at any point in time.
    // Example:
    // Input:
    // [
    //   [1,3,1],
    //   [1,5,1],
    //   [4,2,1]
    // ]
    // Output: 7
    // Explanation: Because the path 1→3→1→1→1 minimizes the sum.
    // 
    // 
    // Dynamic Programming
    // O(m*n)
    let dp = new Array(grid.length).fill(0).map(() => new Array(grid[0].length).fill(0));
    dp[0][0] = grid[0][0];
    for (let i = 1; i < grid.length; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    for (let j = 1; j < grid[0].length; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    return dp[grid.length - 1][grid[0].length - 1];
};