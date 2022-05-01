// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript
function validateBattlefield(field) {
    // Verify battleship game field
    // Return true if field is valid, false otherwise
    // Battleship game field is valid if:
    // 1. Each row has the same number of battleships
    // 2. Each column has the same number of battleships
    // 3. No battleship is on the same row or column as another battleship
    
    // Get the 2D array of the field
    let fieldArray = field.split('\n');

    // Get the number of rows and columns
    let rows = fieldArray.length;
    let cols = fieldArray[0].length;

    // Get the number of battleships per row and column
    let rowBattleships = [];
    let colBattleships = [];
    for (let i = 0; i < rows; i++) {
        let row = fieldArray[i];
        let count = 0;
        for (let j = 0; j < cols; j++) {
            if (row[j] === 'X') {
                count++;
            }
        }
        rowBattleships.push(count);
    }

    for (let i = 0; i < cols; i++) {
        let count = 0;
        for (let j = 0; j < rows; j++) {
            if (fieldArray[j][i] === 'X') {
                count++;
            }
        }
        colBattleships.push(count);
    }

    // Verify that each row has the same number of battleships
    for (let i = 0; i < rows; i++) {
        if (rowBattleships[i] !== rowBattleships[0]) {
            return false;
        }
    }

    // Verify that each column has the same number of battleships
    for (let i = 0; i < cols; i++) {
        if (colBattleships[i] !== colBattleships[0]) {
            return false;
        }
    }

    // Verify that no battleship is on the same row or column as another battleship
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (fieldArray[i][j] === 'X' && (i > 0 && fieldArray[i - 1][j] === 'X' || i < rows - 1 && fieldArray[i + 1][j] === 'X' || j > 0 && fieldArray[i][j - 1] === 'X' || j < cols - 1 && fieldArray[i][j + 1] === 'X')) {
                return false;
            }
        }
    }

    return true;
}