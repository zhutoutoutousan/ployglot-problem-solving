# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def printTree(self, root: Optional[TreeNode]) -> List[List[str]]:
        # Time: O(n)
        # Space: O(n)
        if not root:
            return []
        height = self.getTreeHeight(root)
        width = 2**height - 1
        res = [[''] * width for _ in range(height)]
        self.dfs(root, 0, 0, width, res)
        return res

    def getTreeHeight(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        return 1 + max(self.getTreeHeight(root.left), self.getTreeHeight(root.right))

    def dfs(self, root, row, left, right, res):
        if not root:
            return
        mid = (left + right) // 2
        res[row][mid] = str(root.val)
        self.dfs(root.left, row+1, left, mid, res)
        self.dfs(root.right, row+1, mid+1, right, res)