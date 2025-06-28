func maxSubArray(nums []int) int {
	// Data structure
	// Hashmap

	dp := make(map[int]int)
	dp[0] = nums[0]
	maxNum := nums[0]
	for i := 1; i < len(nums); i++ {
		dp[i] = max(dp[i-1]+nums[i], nums[i])
		maxNum = max(maxNum, dp[i])
	}
	return maxNum
}