/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // Create a tree with root node as n, and each node has two children, one for each step down by 1 or 2
    // Return the number of nodes with values of zero with memoization
    let memo = {};
    const makeTree = function(n){
        if(n === 0) return {val: 0};
        if(n === 1) return {val: 1};
        if(n === 2) return {val: 2};
        if(memo[n]) return memo[n];
        let node = {val: 0};
        node.left = makeTree(n - 1);
        node.right = makeTree(n - 2);
        memo[n] = node;
        return node;
    }
    let root = makeTree(n);
    let queue = [root];
    while(queue.length){
        let len = queue.length;
        for(let i = 0; i < len; i++){
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    let count = 0;
    for(let key in memo){
        if(memo[key].val === 0) count++;
    }
    return count;
};