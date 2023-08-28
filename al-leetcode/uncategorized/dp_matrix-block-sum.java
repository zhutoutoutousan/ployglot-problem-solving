class Solution {
    public int[][] matrixBlockSum(int[][] mat, int k) {
        // Input: mat = [[1,2,3],[4,5,6],[7,8,9]], k = 1
        // Output: [[12,21,16],[27,45,33],[24,39,28]]
        int m = mat.length;
        int n = mat[0].length;
        int[][] res = new int[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int left = Math.max(0, j - k);
                int right = Math.min(n - 1, j + k);
                int top = Math.max(0, i - k);
                int bottom = Math.min(m - 1, i + k);
                int sum = 0;
                for (int x = top; x <= bottom; x++) {
                    for (int y = left; y <= right; y++) {
                        sum += mat[x][y];
                    }
                }
                res[i][j] = sum;
            }
        }
        return res;
    }
}