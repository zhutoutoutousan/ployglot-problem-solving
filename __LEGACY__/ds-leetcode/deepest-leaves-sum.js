/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    if(!root) return 0;
    let max = 0;
    let sum = 0;
    let queue = [root];
    while(queue.length){
        let len = queue.length;
        for(let i = 0; i < len; i++){
            let node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        sum = 0;
        for(let i = 0; i < len; i++){
            let node = queue[i];
            sum += node.val;
        }
        max = Math.max(max, sum);
    }
    return max;
};


// Test cases
const testCases = _  => {
    console.log(deepestLeavesSum(null));
    console.log(deepestLeavesSum({val: 1, left: {val: 2, left: {val: 4, left: null, right: null}, right: {val: 5, left: null, right: null}}, right: {val: 3, left: null, right: null}}));
}

console.log(testCases());