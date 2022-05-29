/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    // Tree traversal
    // O(n)
    // O(n)
    let result = new Array(triangle.length).fill(0);
    for (let i = triangle.length - 1; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (i === triangle.length - 1) {
                result[j] = triangle[i][j];
            } else {
                result[j] = Math.min(result[j], result[j + 1]) + triangle[i][j];
            }
        }
    }
    return result[0];
};