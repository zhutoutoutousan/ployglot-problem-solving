/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    // Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
    // Example:
    // Input:
    // 1 0 1 0 0
    // 1 0 1 1 1

    // Output: 4

    // DP
    // O(m*n)
    let dp = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));
    let max = 0;
    if (matrix.length === 0) {
        return 0;
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === '1') {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                max = Math.max(max, dp[i][j]);
            }
        }
    }
    return max * max;
};