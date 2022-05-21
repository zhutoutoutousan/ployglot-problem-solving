/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values = []) {
    // You are given an integer array values where values[i] represents the value of the ith sightseeing spot. Two sightseeing spots i and j have a distance j - i between them.
    // The score of a pair (i < j) of sightseeing spots is values[i] + values[j] + i - j: the sum of the values of the sightseeing spots, minus the distance between them.
    // Return the maximum score of a pair of sightseeing spots.

    // https://www.youtube.com/watch?v=KAz5O7nS_9k: Videomark: 5:10/14:55

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
    // O(n)
    let max = values[0] + 0;
    let result = -Infinity;
    for (let i = 1; i < values.length; i++) {
        result = Math.max(result, max + values[i] - i);
        max = Math.max(values[i] + i, max);
    }
    return result;
};

// const maxScoreSightseeingPair = function (A = []) {
//     let max = A[0] + 0
//     let result = -Infinity
//     for (let i = 1; i < A.length; i++) {
//       result = Math.max(result, max + A[i] - i)
//       max = Math.max(A[i] + i, max)
//     }
//     return result
//   }
  