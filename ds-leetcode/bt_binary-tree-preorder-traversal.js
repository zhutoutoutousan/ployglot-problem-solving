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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let res = [];
    if(root === null) return res;
    res.push(root.val);
    res = res.concat(preorderTraversal(root.left));
    res = res.concat(preorderTraversal(root.right));
    return res;
};