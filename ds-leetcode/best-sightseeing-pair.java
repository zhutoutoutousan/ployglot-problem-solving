class Solution {
    public int maxScoreSightseeingPair(int[] values) {
        // https://www.youtube.com/watch?v=KAz5O7nS_9k
        // https://leetcode.com/problems/best-sightseeing-pair/submissions/


        // You are given an integer array values where values[i] represents the value of the ith sightseeing spot. Two sightseeing spots i and j have a distance j - i between them.
        // The score of a pair (i < j) of sightseeing spots is values[i] + values[j] + i - j: the sum of the values of the sightseeing spots, minus the distance between them.
        // Return the maximum score of a pair of sightseeing spots.

        // Example 1:
        // Input: values = [8,1,5,2,6]
        // Output: 11
        // Explanation: i = 0, j = 2, score = 8 + 5 + 0 - 2 = 8
        // i = 1, j = 3, score = 1 + 6 + 1 - 3 = 5
        // i = 2, j = 5, score = 5 + 2 + 2 - 5 = 11
        // i = 3, j = 4, score = 2 + 6 + 3 - 4 = 9
        // i = 4, j = 5, score = 6 + 5 + 4 - 5 = 15
        // The maximum score is 15.

        // Code
        if (values == null || values.length == 0) {
            return 0;
        }
        int max = 0;
        for (int i = 0; i < values.length; i++) {
            // Pruning:
            // If the current value is negative, we can't use it to calculate the max score.
            // If the current value is zero, we can't use it to calculate the max score.
            if (values[i] < 0) {
                continue;
            }
            if (values[i] == 0) {
                max = Math.max(max, 0);
                continue;
            }
            for (int j = i + 1; j < values.length; j++) {
                max = Math.max(max, values[i] + values[j] + i - j);
            }
        }
        return max;
    }
}