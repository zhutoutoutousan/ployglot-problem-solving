class Solution {
    public int minFallingPathSum(int[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;
        int[][] dp = new int[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (i == 0) {
                    dp[i][j] = matrix[i][j];
                } else {
                    int min = Integer.MAX_VALUE;
                    for (int k = 0; k < n; k++) {
                        if (k == j) continue;
                        min = Math.min(min, dp[i - 1][k]);
                    }
                    dp[i][j] = min + matrix[i][j];
                }
            }
        }
        int res = Integer.MAX_VALUE;
        for (int i = 0; i < n; i++) {
            res = Math.min(res, dp[m - 1][i]);
        }
        return res;
    }
}