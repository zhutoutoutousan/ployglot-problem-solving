// https://www.codewars.com/kata/59ccf921a25c8c96460000ff/train/javascript
// You are given a 2D integer array matrix. Your task is to find the max sum value of the contiguous-submatrix in it.
// Negative numbers are allowed.
function maxSumOf(matrix){
    let maxSum = 0;
    let currentSum = 0;
    // Extract all possible submatrices
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            for (let k = i; k < matrix.length; k++) {
                for (let l = j; l < matrix[0].length; l++) {
                    currentSum = 0;
                    for (let m = i; m <= k; m++) {
                        for (let n = j; n <= l; n++) {
                            currentSum += matrix[m][n];
                        }
                    }
                    if (currentSum > maxSum) {
                        maxSum = currentSum;
                    }
                }
            }
        }
    }
    return maxSum;
}

function maxSumOfEfficient(matrix){
    // Create a set of submatrices with all applicable shapes dynamically, and scan the matrix to verify the sum of each submatrix
    // This is a more efficient solution than the one above
    let maxSum = 0;
    let currentSum = 0;
    let submatrices = [];
    // Generate submatrices with all applicable shapes
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            for (let k = i; k < matrix.length; k++) {
                for (let l = j; l < matrix[0].length; l++) {
                    submatrices.push(matrix.slice(i, k + 1).map(row => row.slice(j, l + 1)));
                }
            }
        }
    }
    // Scan the matrix to verify the sum of each submatrix
    for (let i = 0; i < submatrices.length; i++) {
        currentSum = 0;
        for (let j = 0; j < submatrices[i].length; j++) {
            for (let k = 0; k < submatrices[i][j].length; k++) {
                currentSum += submatrices[i][j][k];
            }
        }
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;    
}

function maxSumOfKadane(matrix){
    // Fix starting and ending column of the required sub-matrix say start and end respectively.
    // Now, iterate each row and add row sum from starting to ending column to sumSubmatrix and insert this in an array. After iterating each row, perform Kadane’s Algorithm on this newly created array. If the sum obtained by applying Kadane’s algorithm is greater than the overall maximum sum, update the overall maximum sum.
    // In the above step, the row sum from starting to ending column can be calculated in constant time by creating an auxiliary matrix of size N*M containing the prefix sum of each row.
    // The time complexity of the above algorithm is O(N^3*M).

    // Initialize a variable, say maxSum as INT_MIN, to store the maximum subarray sum.
    let maxSum = Number.MIN_SAFE_INTEGER;
    // Create a matrix prefMatrix[N][M] that stores the prefix array sum of every row of the given matrix.
    let prefMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        prefMatrix.push([]);
        for (let j = 0; j < matrix[0].length; j++) {
            prefMatrix[i][j] = 0;
        }
    }
    // Fill the prefMatrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (j === 0) {
                prefMatrix[i][j] = matrix[i][j];
            } else {
                prefMatrix[i][j] = prefMatrix[i][j - 1] + matrix[i][j];
            }
        }
    }
    // Fix the starting and ending columns
    for (let start = 0; start < matrix[0].length; start++) {
        for (let end = start; end < matrix[0].length; end++) {
            // Create an array to store the sum of each row in the submatrix
            let submatrixSum = [];
            for (let i = 0; i < matrix.length; i++) {
                submatrixSum.push(0);
            }
            // Calculate the sum of each row in the submatrix
            for (let i = 0; i < matrix.length; i++) {
                if (start === 0) {
                    submatrixSum[i] = prefMatrix[i][end];
                } else {
                    submatrixSum[i] = prefMatrix[i][end] - prefMatrix[i][start - 1];
                }
            }
            // Find the maximum sum subarray in the submatrixSum array
            let currentSum = 0;
            for (let i = 0; i < submatrixSum.length; i++) {
                currentSum += submatrixSum[i];
                if (currentSum > maxSum) {
                    maxSum = currentSum;
                }
                if (currentSum < 0) {
                    currentSum = 0;
                }
            }
        }
    }
    return maxSum;
}