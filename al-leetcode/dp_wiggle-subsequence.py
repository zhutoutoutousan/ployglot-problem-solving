class Solution:
    def wiggleMaxLengthGreedy(self, nums: List[int]) -> int:
        # https://www.youtube.com/watch?v=F8OY_uKwKTk
        # Greedy algorithm
        # Time: O(n)
        # Space: O(1)
        if not nums:
            return 0
        if len(nums) == 1:
            return 1
        up = 1
        down = 1
        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]:
                up = down + 1
            elif nums[i] < nums[i - 1]:
                down = up + 1
        return max(up, down)

    def wiggleMaxLength(self, nums: List[int]) -> int:
        dp = [nums[i-1]-nums[i] for i in range(1, len(nums)) if nums[i-1] != nums[i]]
        dp.insert(0, 0)
        dp.append(0)
        for i in range(2, len(dp)):
            if dp[i] > 0:
                dp[i] += dp[i-2]
            else:
                dp[i] += dp[i-1]
        return dp[-1] + 1
        