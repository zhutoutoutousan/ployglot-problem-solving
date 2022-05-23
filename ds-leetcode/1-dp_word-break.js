/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // Search s based on wordDict using RegEx
    // O(n^2)
    let wordDictSet = new Set(wordDict);
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDictSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
};