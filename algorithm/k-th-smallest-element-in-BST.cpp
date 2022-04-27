/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
// Given the root of a binary search tree, and an integer k, return the k-th smallest value(1-indexed) of all the values of the nodes in the tree
class Solution {
public:
    int kthSmallest(TreeNode* root, int k) {
        int count = 0;
        int res = 0;
        inorder(root, k, count, res);
        return res;
    }
    void inorder(TreeNode* root, int k, int& count, int& res) {
        if (!root) return;
        inorder(root->left, k, count, res);
        count++;
        if (count == k) res = root->val;
        inorder(root->right, k, count, res);
    }
};