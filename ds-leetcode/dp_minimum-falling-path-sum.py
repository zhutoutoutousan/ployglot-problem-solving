class Solution:
    def minFallingPathSum(self, matrix: List[List[int]]) -> int:
        if not matrix:
            return 0
        m, n = len(matrix), len(matrix[0])
        dp = [[0] * n for _ in range(m)]
        dp[0] = matrix[0]
        for i in range(1, m):
            for j in range(n):
                dp[i][j] = matrix[i][j] + min(dp[i - 1][(j - 1) % n], dp[i - 1][(j + 1) % n], dp[i - 1][j])
        return min(dp[m - 1])