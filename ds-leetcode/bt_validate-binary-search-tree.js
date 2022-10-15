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
 * @return {boolean}
 */
var isValidBST = function(root) {
    // DFS
    if(root === null) return true;
    return dfs(root, -Infinity, Infinity);
};

var dfs = function(root, min, max) {
    if(root === null) return true;
    if(root.val <= min || root.val >= max) return false;
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
}
