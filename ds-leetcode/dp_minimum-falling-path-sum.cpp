class Solution {
public:
    int minFallingPathSum(vector<vector<int>>& matrix) {
        int m = matrix.size();
        int n = matrix[0].size();
        vector<vector<int>> dp(m, vector<int>(n, 0));
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (i == 0) {
                    dp[i][j] = matrix[i][j];
                } else {
                    int min_num = INT_MAX;
                    for (int k = 0; k < n; k++) {
                        if (k == j) continue;
                        min_num = min(min_num, dp[i - 1][k]);
                    }
                    dp[i][j] = min_num + matrix[i][j];
                }
            }
        }
        int res = INT_MAX;
        for (int i = 0; i < n; i++) {
            res = min(res, dp[m - 1][i]);
        }
        return res;
    }
    int min(int a, int b) {
        return a < b ? a : b;
    }
};