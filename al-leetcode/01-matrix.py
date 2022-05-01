# https://leetcode.com/problems/01-matrix/submissions/
# Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        # Use dfs
        # Time: O(m*n)
        # Space: O(m*n)
        for i in range(len(mat)):
            for j in range(len(mat[0])):
                if mat[i][j] == 1:
                    mat[i][j] = self.dfs(mat, i, j)
        return mat
        
    def dfs(self, mat, i, j):
        if i < 0 or i >= len(mat) or j < 0 or j >= len(mat[0]):
            return float('inf')
        if mat[i][j] == 0:
            return 0
        mat[i][j] = 0
        return 1 + min(self.dfs(mat, i-1, j), self.dfs(mat, i+1, j), self.dfs(mat, i, j-1), self.dfs(mat, i, j+1))