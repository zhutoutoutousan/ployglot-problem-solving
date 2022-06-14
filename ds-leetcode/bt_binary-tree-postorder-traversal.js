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
var postorderTraversal = function(root) {
    let res = [];
    if(root === null) return res;
    res = res.concat(postorderTraversal(root.left));
    res = res.concat(postorderTraversal(root.right));
    res.push(root.val);
    return res;
};