

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    // Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.

    // A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).
    
    let n = matrix.length;
    let dp = [];
    for (let i = 0; i < n; i++) {
        dp.push([]);
        for (let j = 0; j < n; j++) {
            dp[i].push(0);
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0) {
                dp[i][j] = matrix[i][j];
            } else {
                let min = Number.MAX_SAFE_INTEGER;
                for (let k = j - 1; k <= j + 1; k++) {
                    if (k < 0 || k >= n) {
                        continue;
                    }
                    min = Math.min(min, dp[i - 1][k]);
                }
                dp[i][j] = min + matrix[i][j];
            }
        }
    }
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        min = Math.min(min, dp[n - 1][i]);
    }
    return min
};