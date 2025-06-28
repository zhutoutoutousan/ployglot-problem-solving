// https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let min = Number.MAX_VALUE;
    for(let i = 0; i < points.length; i++) {
        let dist = Math.sqrt(Math.pow(x - points[i][0], 2) + Math.pow(y - points[i][1], 2));
        if(dist < min) min = dist;
    }
    return min;
};