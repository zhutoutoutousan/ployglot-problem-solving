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
var inorderTraversal = function(root) {
    let res = [];
    if(root === null) return res;
    res = res.concat(inorderTraversal(root.left));
    res.push(root.val);
    res = res.concat(inorderTraversal(root.right));
    return res;
};