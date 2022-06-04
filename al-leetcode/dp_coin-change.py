class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        # You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
        # Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
        # You may assume that you have an infinite number of each kind of coin.

        # Dynamic Programming
        # Time: O(n*amount)
        # Space: O(amount)
        if not coins:
            return -1
        if amount == 0:
            return 0
        dp = [0 for _ in range(amount + 1)]
        dp[0] = 0
        for i in range(1, amount + 1):
            dp[i] = float('inf')
            for coin in coins:
                if i - coin >= 0 and dp[i - coin] != float('inf'):
                    dp[i] = min(dp[i], dp[i - coin] + 1)
        return dp[-1] if dp[-1] != float('inf') else -1

        
