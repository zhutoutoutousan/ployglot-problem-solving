/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    // Recursive with memoization
    let memo = {};
    let fib = function(n){
        if(n === 0) return 0;
        if(n === 1) return 1;
        if(n === 2) return 1;
        if(memo[n]) return memo[n];
        memo[n] = fib(n - 1) + fib(n - 2) + fib(n - 3);
        return memo[n];
    }
    return fib(n);
};