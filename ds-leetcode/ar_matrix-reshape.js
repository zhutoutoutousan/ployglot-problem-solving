/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if(mat.length * mat[0].length !== r * c){
        return mat;
    }
    let newMat = Array(r).fill(0).map(() => Array(c).fill(0));
    let row = 0;
    let col = 0;
    for(let i = 0; i < mat.length; i++){
        for (let j = 0; j < mat[0].length; j++) {
            newMat[row][col] = mat[i][j];
            col++;
            if(col === c){
                col = 0;
                row++;
            }
        }
    }
    return newMat;
};