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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    if(root === null) return false;
    let stack = [root];
    let set = new Set();
    while(stack.length > 0) {
        let node = stack.pop();
        if(set.has(k - node.val)) return true;
        set.add(node.val);
        if(node.left !== null) stack.push(node.left);
        if(node.right !== null) stack.push(node.right);
    }
    return false;
};