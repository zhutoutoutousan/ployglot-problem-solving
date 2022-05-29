class Solution {
    public int maxEnvelopes(int[][] envelopes) {
        Arrays.sort(envelopes, (a, b) -> a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]);
        int[] dp = new int[envelopes.length];
        int res = 0;
        for (int[] envelope : envelopes) {
            int i = Arrays.binarySearch(dp, 0, res, envelope[1]);
            if (i < 0) {
                i = -(i + 1);
            }
            dp[i] = envelope[1];
            if (i == res) {
                res++;
            }
        }
        return res;
    }
}