/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

    // You have the following three operations permitted on a word:
    
    // Insert a character
    // Delete a character
    // Replace a character
    
    // Dynamic programming
    // O(n^2)
    if (word1.length === 0) {
        return word2.length;
    }
    if (word2.length === 0) {
        return word1.length;
    }
    if (word1.length === 1) {
        return word2.length - word1.length;
    }
    if (word2.length === 1) {
        return word1.length - word2.length;
    }

    let dp = new Array(word1.length).fill(0).map(() => new Array(word2.length).fill(0));
    let max = 0;
    let start = 0;
    let end = 0;
    for (let i = 0; i < word1.length; i++) {
        dp[i][0] = i;
    }
    for (let i = 0; i < word2.length; i++) {
        dp[0][i] = i;
    }
    for (let i = 1; i < word1.length; i++) {
        for (let j = 1; j < word2.length; j++) {
            if (word1[i] === word2[j]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
            if (dp[i][j] > max) {
                max = dp[i][j];
                start = i;
                end = j;
            }
        }
    }
    return max;
};