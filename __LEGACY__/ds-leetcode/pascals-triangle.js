/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // Dynamic Programming
    // O(n)
    // O(n)
    let result = [];
    for (let i = 0; i < numRows; i++) {
        let row = [];
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }
        result.push(row);
    }
    return result;
};