// run on javascript V8 4.8.0
// https://codeforces.com/contest/1742/problem/A
// You are given an array a of n positive integers. Determine if, by rearranging the elements, you can make the array strictly increasing. In other words, determine if it is possible to rearrange the elements such that a1<a2<⋯<an holds.
function main() {
    var tn = +readline(); // Number of test cases
    for (var i = 0; i < tn; i++) {
        var n = +readline();
        var a = readline().split(' ').map(Number);
        // Call solve()
        solve(n, a);
    }
}

function solve(n, a) {
    // Sort array in ascending order using quicksort
    var quicksort = function (a) {
        if (a.length <= 1) {
            return a;
        }
        var pivot = a[0];
        var left = [];
        var right = [];
        for (var i = 1; i < a.length; i++) {
            if (a[i] < pivot) {
                left.push(a[i]);
            } else {
                right.push(a[i]);
            }
        }
        return quicksort(left).concat(pivot, quicksort(right));
    }
    var a = quicksort(a);
    // Check if a is in non-decreasing order
    var isDecreasing = function (a) {
        for (var i = 1; i < a.length; i++) {
            if (a[i-1] > a[i]) {
                return true;
            }
        }
        return false;
    }
    var isEqual = function (a) {
        for (var i = 1; i < a.length; i++) {
            if (a[i-1] == a[i]) {
                return true;
            }
        }
        return false;
    }
    
    if (isDecreasing(a)) {
        print('NO');
    }
    else if (isEqual(a)) {
        print('NO');
    }
    else {
        print('YES');
    }
}


main();
