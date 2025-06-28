/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // dikstra
    // O(m*n)
    // O(m*n)
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = [];
    // Initialize dp
    for (let i = 0; i < m; i++) {
        dp.push([]);
        for (let j = 0; j < n; j++) {
            dp[i].push(0);
        }
    }
    // Fill dp
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else if (i === 0 && j === 0) {
                dp[i][j] = 1;
            } else if (i === 0) {
                dp[i][j] = dp[i][j - 1];
            } else if (j === 0) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
};