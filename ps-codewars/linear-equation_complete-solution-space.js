// Link: https://www.codewars.com/kata/56464cf3f982b2e10d000015/train/javascript
// ------------------------------------------------------------------------------------------------
// Your task is to solve N x M Systems of Linear Equations (LS) and to determine the complete solution space.
// Normally an endless amount of solutions exist, not only one or none like for N x N. You have to handle N unkowns and M equations (N>=1, M>=1) and your result has to display all numbers in 'reduced fraction representation' too (perhaps first you can try my N x N kata). More about LS you can find here or perhaps is already known.

// First of all two easy examples:
// 1*x1 + 2*x2 + 0*x3 + 0*x4 = 7
// 0*x1 + 3*x2 + 4*x3 + 0*x4 = 8
// 0*x1 + 0*x2 + 5*x3 + 6*x4 = 9

// Input: Array of arrays of numbers
// Example: [[1 2 0 0 7], [0 3 4 0 8], [0 0 5 6 9]]

// Output:
// SOL=(97/15; 4/15; 9/5; 0) + q1* (-16/5; 8/5; -6/5; 1)

function solve(input) {
    let resultString = '';
    // Log linear equation system
    console.log('Linear equation system:');
    for (let i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
    // Calculate determinant
    let determinant = input[0][0] * input[1][1] - input[0][1] * input[1][0];
    // Log determinant
    console.log('Determinant: ' + determinant);
    // Calculate solutions
    for (let i = 0; i < input.length; i++) {
        let solution = (input[i][3] * input[1][1] - input[i][1] * input[1][3]) / determinant;
        resultString += solution + ' ';
    }
    // Calculate constants
    let constant1 = (input[0][3] * input[1][1] - input[0][1] * input[1][3]) / determinant;
    let constant2 = (input[0][0] * input[1][3] - input[0][3] * input[1][0]) / determinant;
    let constant3 = (input[0][1] * input[1][0] - input[0][0] * input[1][1]) / determinant;
    // Log constants
    console.log('Constants: ' + constant1 + ' ' + constant2 + ' ' + constant3);
    // Log result
    console.log('Result: ' + resultString + '(' + constant1 + '; ' + constant2 + '; ' + constant3 + '; 1)');
    
    return resultString + '(' + constant1 + '; ' + constant2 + '; ' + constant3 + '; 1)';
}