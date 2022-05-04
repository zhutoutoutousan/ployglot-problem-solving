# Template
```js
// https://yogeshkumarborkar.medium.com/codeforces-submissions-using-javascript-98a8895e0405
// https://github.com/expnotes9/codeforces/blob/master/templates/template.js
// run on javascript V8 4.8.0

function main() {
  var n = +readline();
  var s = readline();
  var x = new Array(n);
  var y = new Array(n);
  for (i = 0; i < n; i++) {
    xy = readline().split(" ");
    x[i] = +xy[0];
    y[i] = +xy[1];
  }
  
  // solve here
  
  print(n);
  print(s);
  print(x[0]);
  print(y[n - 1]);  
}

function solve(n) {
  return 0;
}

main();
```