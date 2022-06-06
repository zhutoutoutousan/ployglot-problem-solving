/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    // Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.
    // Example 1:
    // Input:
    // "bbbab"
    // Output: 4
    // One possible longest palindrome subsequence is "bbbb".
    // Example 2:
    // Input:
    // "cbbd"
    // Output: 2
    // One possible longest palindrome subsequence is "bb".
    // 
    // 
    // DP
    // O(n^2)
    if (s.length === 0) {
        return 0;
    }
    if (s.length === 1) {
        return 1;
    }
    let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0));
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = 1;
    }
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
            max = Math.max(max, dp[i][j]);
        }
    }
    return max;
};