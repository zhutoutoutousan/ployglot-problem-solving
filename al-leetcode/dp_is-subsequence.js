/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

    // A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
    // 
    // Dynamic programming
    // O(n^2)
    if (s.length === 0) {
        return true;
    }
    if (t.length === 0) {
        return false;
    }
    if (s.length === 1) {
        return t.indexOf(s) >= 0;
    }
    let dp = new Array(s.length).fill(0).map(() => new Array(t.length).fill(0));
    let max = 0;
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        dp[i][0] = 0;
    }

    for (let i = 0; i < t.length; i++) {
        dp[0][i] = 0;
    }

    for (let i = 1; i < s.length; i++) {
        for (let j = 1; j < t.length; j++) {
            if (s[i] === t[j]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
            if (dp[i][j] > max) {
                max = dp[i][j];
                start = i;
                end = j;
            }
        }
    }
    return s.substring(start, end + 1) === t.substring(start, end + 1);
};