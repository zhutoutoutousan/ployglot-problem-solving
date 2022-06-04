class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> res = new ArrayList<>();
        int[] cols = new int[n];
        int[] d1 = new int[2 * n - 1];
        int[] d2 = new int[2 * n - 1];
        helper(res, cols, d1, d2, 0, n);
        return res;
    }
    private void helper(List<List<String>> res, int[] cols, int[] d1, int[] d2, int row, int n) {
        if (row == n) {
            res.add(drawBoard(cols, n));
            return;
        }
        for (int col = 0; col < n; col++) {
            if (cols[col] == 0 && d1[col + row] == 0 && d2[col - row + n - 1] == 0) {
                cols[col] = 1;
                d1[col + row] = 1;
                d2[col - row + n - 1] = 1;
                helper(res, cols, d1, d2, row + 1, n);
                cols[col] = 0;
                d1[col + row] = 0;
                d2[col - row + n - 1] = 0;
            }
        }
    }
    private List<String> drawBoard(int[] cols, int n) {
        List<String> board = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < n; j++) {
                sb.append(cols[j] == 1 ? "Q" : ".");
            }
            board.add(sb.toString());
        }
        return board;
    }
}