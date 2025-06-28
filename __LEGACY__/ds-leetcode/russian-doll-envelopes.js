/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    // Dynamic Programming
    // O(n)

    // Sort by width
    envelopes.sort((a, b) => a[0] - b[0]);

    // Sort by height
    envelopes.sort((a, b) => a[1] - b[1]);

    // Dynamic Programming
    // O(n)
    let dp = new Array(envelopes.length).fill(0);
    dp[0] = 1;
    for (let i = 1; i < envelopes.length; i++) {
        let max = 0;
        for (let j = 0; j < i; j++) {
            if (envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1]) {
                max = Math.max(max, dp[j]);
            }
        }
        dp[i] = max + 1;
    }
    return dp[dp.length - 1];
    
};