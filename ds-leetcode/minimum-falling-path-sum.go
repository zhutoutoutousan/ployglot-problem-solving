func minFallingPathSum(matrix [][]int) int {
	if len(matrix) == 0 {
		return 0
	}
	for i := 1; i < len(matrix); i++ {
		for j := 0; j < len(matrix[0]); j++ {
			matrix[i][j] += min(matrix[i-1][j], matrix[i-1][j+1], matrix[i-1][j-1])
		}
	}
	return min(matrix[len(matrix)-1]...)
}