// https://leetcode.com/problems/pacific-atlantic-water-flow/

class Solution {
public:
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
        int m = heights.size();
        if (m == 0) return {};
        int n = heights[0].size();
        if (n == 0) return {};
        vector<vector<int>> pacific(m, vector<int>(n, 0));
        vector<vector<int>> atlantic(m, vector<int>(n, 0));
        vector<vector<int>> res;
        for (int i = 0; i < m; ++i) {
            dfs(heights, pacific, i, 0, m, n);
            dfs(heights, atlantic, i, n - 1, m, n);
        }
        for (int i = 0; i < m; ++i) {
            dfs(heights, pacific, 0, i, m, n);
            dfs(heights, atlantic, m - 1, i, m, n);
        }
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (pacific[i][j] == 1 && atlantic[i][j] == 1) {
                    res.push_back({i, j});
                }
            }
        }
        return res;
    }
// dfs
private:
    void dfs(vector<vector<int>>& heights, vector<vector<int>>& visited, int i, int j, int m, int n) {
        if (i < 0 || i >= m || j < 0 || j >= n || visited[i][j] == 1 || heights[i][j] < heights[i][j - 1]) return;
        visited[i][j] = 1;
        dfs(heights, visited, i, j - 1, m, n);
        dfs(heights, visited, i, j + 1, m, n);
        dfs(heights, visited, i - 1, j, m, n);
        dfs(heights, visited, i + 1, j, m, n);
    }
};