// https://www.codewars.com/kata/5b5fe164b88263ad3d00250b/train/javascript
// INPUT:    "SEND + MORE = MONEY"
// SOLUTION: "9567 + 1085 = 10652"

// INPUT:    "ELEVEN + NINE + FIVE + FIVE = THIRTY"
// SOLUTION: "797275 + 5057 + 4027 + 4027 = 810386"
function alphametics(s){
    var letters = s.match(/[A-Z]/g).filter((v,i,a)=>a.indexOf(v)==i).sort();
    var nums = "0123456789".split('');
    var result = [];
    
    function permute(a, n) {
        if (n == 0) {
            result.push(a.slice());
        } else {
            for (var i = 0; i < n; i++) {
                permute(a, n - 1);
                var j = n % 2 ? 0 : i;
                var tmp = a[n - 1];
                a[n - 1] = a[j];
                a[j] = tmp;
            }
        }
    }
    permute(nums, nums.length);
    var words = s.split(/[^A-Z]+/);
    var sums = s.split(/[^A-Z]+/).map(w => w.split('').map(l => letters.indexOf(l)).reduce((s, d) => s * 10 + d, 0));
    var total = sums.pop();
    for (var i = 0; i < result.length; i++) {
        var r = result[i];
        if (sums.every((s, j) => s == words[j].split('').map(l => r[letters.indexOf(l)]).reduce((s, d) => s * 10 + d, 0))) {
            return letters.reduce((s, l, i) => s + l + ' = ' + r[i] + ' ', '') + '-> ' + total;
        }
    }
}

function alphameticsEfficient(s){
    // Convert the alphametic puzzle into a linear equation
    // Solve the linear equation
    // Return the solution
    
    // Code


}