/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    // Input: mat = [[1,2,3],[4,5,6],[7,8,9]], k = 1
    // Output: [[12,21,16],[27,45,33],[24,39,28]]
    // 
    // O(n^2)
    // O(n^2)
    // dp

    // Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for:
    // i - k <= r <= i + k,
    // j - k <= c <= j + k, and
    // (r, c) is a valid position in the matrix.

    if (mat.length === 0) {
        return [];
    }
    let hashMap = {};
    let result = [];
    // Build hashMap
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            let key = i + ',' + j;
            hashMap[key] = mat[i][j];
        }
    }
    // Build result
    for (let i = 0; i < mat.length; i++) {
        let row = [];
        for (let j = 0; j < mat[i].length; j++) {
            let sum = 0;
            for (let r = i - k; r <= i + k; r++) {
                for (let c = j - k; c <= j + k; c++) {
                    if (r < 0 || r >= mat.length || c < 0 || c >= mat[i].length) {
                        continue;
                    }
                    let key = r + ',' + c;
                    sum += hashMap[key];
                }
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
};
