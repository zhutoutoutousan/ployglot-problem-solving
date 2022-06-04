// min


func minFallingPathSum(matrix [][]int) int {
	if len(matrix) == 0 {
		return 0
	}
	dp := make([][]int, len(matrix))
	for i := range dp {
		dp[i] = make([]int, len(matrix[0]))
	}
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[0]); j++ {
			if i == 0 {
				dp[i][j] = matrix[i][j]
			} else {
				dp[i][j] = matrix[i][j] + min(dp[i-1][(j-1+len(matrix[0]))%len(matrix[0])], dp[i-1][(j+1)%len(matrix[0])])
			}
		}
	}
	min := dp[len(dp)-1][0]
	for i := 0; i < len(dp[len(dp)-1]); i++ {
		if dp[len(dp)-1][i] < min {
			min = dp[len(dp)-1][i]
		}
	}
	return min
}