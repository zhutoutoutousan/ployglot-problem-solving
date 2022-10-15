/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // Write your code here.
    let count = 0;
    while(n > 0) {
        if(n % 2 === 1) count++;
        n = Math.floor(n / 2);
    }
    return count;
};