// run on javascript V8 4.8.0
// https://codeforces.com/contest/1742/problem/A
// You are given three integers a, b, and c. Determine if one of them is the sum of the other two.
function main() {
    var tn = +readline(); // Number of test cases
    for (var i = 0; i < tn; i++) {

        var a = readline().split(' ').map(Number);
        // Call solve()
        solve(a);
    }
}

function solve(a) {
    var a = a.sort(function(a, b){return a-b});
    if (a[0] + a[1] == a[2]) {
        print('YES');
    } else {
        print('NO');
    }
}

main();
