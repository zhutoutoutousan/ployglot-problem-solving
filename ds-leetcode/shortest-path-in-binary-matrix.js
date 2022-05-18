/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {

    // Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

    // A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
    
    // All the visited cells of the path are 0.
    // All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
    // The length of a clear path is the number of visited cells of this path.    
    // Dynamic Programming  
    // Time: O(n^2)
    // Space: O(n^2)

    if(!grid || grid.length === 0 || grid[0].length === 0) return 0;
    if(grid[0][0] === 1 || grid[grid.length - 1][grid[0].length - 1] === 1) return -1;
    let n = grid.length;
    let dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    dp[0][0] = 1;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 1) continue;
            if(i > 0) dp[i][j] += dp[i - 1][j];
            if(j > 0) dp[i][j] += dp[i][j - 1];
        }
    }
    return dp[n - 1][n - 1] === 0 ? -1 : dp[n - 1][n - 1];
};