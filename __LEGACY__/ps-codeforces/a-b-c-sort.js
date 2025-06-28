// run on javascript V8 4.8.0
// https://codeforces.com/problemset/problem/1674/D

// You are given three arrays a, b and c. Initially, array a consists of n elements, arrays b and c are empty.
// You are performing the following algorithm that consists of two steps:
// Step 1: while a is not empty, you take the last element from a and move it in the middle of array b. If b currently has odd length, you can choose: place the element from a to the left or to the right of the middle element of b. As a result, a becomes empty and b consists of n elements.
// Step 2: while b is not empty, you take the middle element from b and move it to the end of array c. If b currently has even length, you can choose which of two middle elements to take. As a result, b becomes empty and c now consists of n elements.
function main() {
    var tn = +readline(); // Number of test cases
    for (var i = 0; i < tn; i++) {
        var n = +readline();
        var a = readline().split(' ').map(Number);
        var b = [];
        var c = [];
        // Call solve()
        solve(a, b, c);
    }

}
  
function solve(a, b, c) {
  for (i = 0; i < n; i++) {
    a[i] = +a[i];
  }
  while (a.length > 0) {
    var x = a.pop();
    b.push(x);
    if (b.length % 2 == 0) {
      var y = b.splice(Math.floor(b.length / 2), 1);
      c.push(y[0]);
    } else {
      var y = b.splice(Math.floor(b.length / 2) - 1, 2);
      c.push(y[0]);
      c.push(y[1]);
    }
  }
  while (b.length > 0) {
    var x = b.pop();
    c.push(x);
  }
  // Check if c is in non-decreasing order
    var isDecreasing = function (c) {
      for (var i = 1; i < c.length; i++) {
      if (c[i-1] > c[i]) {
          return true;
      }
      }
      return false;
  }

  if (!isDecreasing(c)) {
    print('YES');
  }
  else {
    print('NO');
  }
}
  
// main();

// Test Code
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


