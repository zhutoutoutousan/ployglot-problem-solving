// var puzzle = [
//     [5,3,0,0,7,0,0,0,0],
//     [6,0,0,1,9,5,0,0,0],
//     [0,9,8,0,0,0,0,6,0],
//     [8,0,0,0,6,0,0,0,3],
//     [4,0,0,8,0,3,0,0,1],
//     [7,0,0,0,2,0,0,0,6],
//     [0,6,0,0,0,0,2,8,0],
//     [0,0,0,4,1,9,0,0,5],
//     [0,0,0,0,8,0,0,7,9]];

// sudoku(puzzle);
// /* Should return
// [[5,3,4,6,7,8,9,1,2],
// [6,7,2,1,9,5,3,4,8],
// [1,9,8,3,4,2,5,6,7],
// [8,5,9,7,6,1,4,2,3],
// [4,2,6,8,5,3,7,9,1],
// [7,1,3,9,2,4,8,5,6],
// [9,6,1,5,3,7,2,8,4],
// [2,8,7,4,1,9,6,3,5],
// [3,4,5,2,8,6,1,7,9]] 
function sudoku(puzzle) {
    //return the solved puzzle as a 2d array of 9 x 9 
    //O(n^2)
    let row = new Array(9).fill(0);
    let col = new Array(9).fill(0);
    let box = new Array(9).fill(0);
    let result = new Array(9).fill(0);
    for (let i = 0; i < 9; i++) {
        result[i] = new Array(9).fill(0);
    }
    // Solve the puzzle
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (puzzle[i][j] !== 0) {
                let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                row[i] = 1;
                col[j] = 1;
                box[boxIndex] = 1;
                result[i][j] = puzzle[i][j];
            }
        }
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (result[i][j] === 0) {
                let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                let candidates = new Array(9).fill(0);
                for (let k = 0; k < 9; k++) {
                    if (row[k] === 0 && col[k] === 0 && box[k] === 0) {
                        candidates[k] = k + 1;
                    }
                }
                let index = 0;
                while (candidates[index] === 0) {
                    index++;
                }
                result[i][j] = candidates[index];
                row[i] = 1;
                col[j] = 1;
                box[boxIndex] = 1;
            }
        }
    }
    return result;
}