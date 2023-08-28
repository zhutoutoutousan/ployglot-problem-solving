/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
// https://leetcode.com/problems/deepest-leaves-sum/submissions/
// Q1: If you push a TreeNode into a queue, what's queue.size()?
// A1: queue.size() is the number of nodes in the queue.
class Solution {
    public int deepestLeavesSum(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList();
        queue.offer(root);
        
        int level_sum = 0;
        
        while (!queue.isEmpty()) {
            level_sum = 0;
            int size = queue.size();
            for (int i=0; i<size; i++) {
                TreeNode current_node = queue.poll();
                level_sum += current_node.val;
                if (current_node.left != null) queue.offer(current_node.left);
                if (current_node.right != null) queue.offer(current_node.right);
            }
        }
        return level_sum;
    }

    public int deepestLeavesSumTraverse(TreeNode root) {
        // Postorder traversal, return the sum of the deepest leaves
        return traverse(root, 0);
    }

    private int traverse(TreeNode root, int level) {
        if (root == null) return 0;
        if (root.left == null && root.right == null) return root.val * (int)Math.pow(2, level);
        return traverse(root.left, level+1) + traverse(root.right, level+1);
    }
}