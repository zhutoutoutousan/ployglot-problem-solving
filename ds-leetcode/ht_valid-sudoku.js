/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row = Array(9).fill(0).map(() => Array(9).fill(0));
    let col = Array(9).fill(0).map(() => Array(9).fill(0));
    let box = Array(9).fill(0).map(() => Array(9).fill(0));
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(board[i][j] !== '.'){
                let num = board[i][j] - '0';
                let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if(row[i][num - 1] || col[j][num - 1] || box[boxIndex][num - 1]){
                    return false;
                }
                row[i][num - 1] = 1;
                col[j][num - 1] = 1;
                box[boxIndex][num - 1] = 1;
            }
        }
    }
    return true;
};