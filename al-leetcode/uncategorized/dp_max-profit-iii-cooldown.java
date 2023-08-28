class Solution {
    public int maxProfit(int[] prices) {
        // Build decision tree on cooldown, buy, sell based on prices
        // dp[i][0] = max profit if not holding anything
        // dp[i][1] = max profit if holding stock
        // dp[i][2] = max profit if on cooldown
        int[][] dp = new int[prices.length][3];
        for (int i = 0; i < prices.length; i++) {
            if (i == 0) {
                dp[i][0] = 0;
                dp[i][1] = -prices[i];
                dp[i][2] = 0;
            }
            else {
                dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2]);
                dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
                dp[i][2] = dp[i - 1][1] + prices[i];
            }
        }
        return Math.max(dp[prices.length - 1][0], dp[prices.length - 1][2]);
    }
}