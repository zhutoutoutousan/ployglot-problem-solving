/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {

    this.matrix = matrix;
    this.sum = [];
    for (let i = 0; i < matrix.length; i++) {
        let row = [];
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === 0) {
                row.push(matrix[i][j]);
            } else {
                row.push(row[j - 1] + matrix[i][j]);
            }
        }
        this.sum.push(row);
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
//  int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;
    // O(1)
    for (let i = row1; i <= row2; i++) {
        sum += this.sum[i][col2] - (col1 > 0 ? this.sum[i][col1 - 1] : 0);
    }
    return sum;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */