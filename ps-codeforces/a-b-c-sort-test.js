// You are given three arrays a, b and c. Initially, array a consists of n elements, arrays b and c are empty.
// You are performing the following algorithm that consists of two steps:
// Step 1: while a is not empty, you take the last element from a and move it in the middle of array b. If b currently has odd length, you can choose: place the element from a to the left or to the right of the middle element of b. As a result, a becomes empty and b consists of n elements.
// Step 2: while b is not empty, you take the middle element from b and move it to the end of array c. If b currently has even length, you can choose which of two middle elements to take. As a result, b becomes empty and c now consists of n elements.
function ABCSort (a, b, c) {
        
    
            


    // Check if c is in non-decreasing order
    var isDecreasing = function (c) {
        // Return True for single element
        if (c.length == 1) {
            return false;
        }
        for (var i = 1; i < c.length; i++) {
        if (c[i-1] < c[i]) {
            return false;
        }
        }
        return true;
    }
    
    if (!isDecreasing(c)) {
        return 'YES';
    }
    else {
        return 'NO';
    }
}

function stepOne(a, b, c, ) {

}

// Test Code
var a = [7331];
var b = [];
var c = [];
console.log(ABCSort(a, b, c));
