function solveNQueens(n: number): string[][] {
    let result: string[][] = [];
    let board: string[][] = [];
    for (let i = 0; i < n; i++) {
        board.push([]);
        for (let j = 0; j < n; j++) {
            board[i].push('.');
        }
    }
    solve(board, 0, result);
    return result;
};

function solve(board: string[][], col: number, result: string[][]): void {
    if (col === board.length) {
        result.push(board.map(row => row.join('')));
        return;
    }
    for (let i = 0; i < board.length; i++) {
        if (isValid(board, i, col)) {
            board[i][col] = 'Q';
            solve(board, col + 1, result);
            board[i][col] = '.';
        }
    }
}

function isValid(board: string[][], row: number, col: number): boolean {
    for (let i = 0; i < col; i++) {
        if (board[row][i] === 'Q') {
            return false;
        }
    }
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') {
            return false;
        }
    }
    for (let i = row, j = col; i < board.length && j >= 0; i++, j--) {
        if (board[i][j] === 'Q') {
            return false;
        }
    }
    return true;
}