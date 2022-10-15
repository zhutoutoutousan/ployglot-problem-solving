/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    // Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

    // Code
    let count = 0;
    for(let i = low; i <= high; i++) {
        if(i % 2 !== 0) count++;
    }
    return count;
    
};