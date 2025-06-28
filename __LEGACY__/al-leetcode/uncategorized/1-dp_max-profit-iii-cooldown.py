class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        dp = {} # key=(i, buying) val=max_profit
        def dfs(i, buying):
            if(i >= len(prices)):
                return 0
            if(i, buying) in dp:
                return dp[(i, buying)]
            if(buying):
                dp[(i, buying)] = max(dfs(i+1, not buying) - prices[i], dfs(i+1, buying))
            else:
                dp[(i, buying)] = max(dfs(i+1, buying), dfs(i+2, not buying) + prices[i])
            return dp[(i, buying)]
        return dfs(0, True)