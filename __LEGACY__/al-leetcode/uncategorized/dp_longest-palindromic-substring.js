/**
 * @param {string} s
 * @return {string}
 * @TODO Handle even length edge case
 */
 var longestPalindrome = function(s) {
    // Given a string s, find the longest palindrome substring in s. You may assume that the maximum length of s is 1000.
    // Example 1:
    // Input: "babad"
    // Output: "bab"
    // Note: "aba" is also a valid answer.
    // Example 2:
    // Input: "cbbd"
    // Output: "bb"
    // 
    // For each letter, expand around it to find the longest palindrome.
    // O(n^2)
    if (s.length === 0) {
        return '';
    }
    if (s.length === 1) {
        return s;
    }
    let max = 0;
    let start = 0;
    let end = 0;
    // Even length
    for (let i = 0; i < s.length; i++) {
        let len = expandAroundCenter(s, i, i);
        if (len > max) {
            max = len;
            start = i - (len - 1) / 2;
            end = i + (len - 1) / 2;
        }
        len = expandAroundCenter(s, i, i + 1);
        if (len > max) {
            max = len;
            start = i - (len - 1) / 2;
            end = i + (len - 1) / 2;
        }
    }
    return s.substring(start, end + 1);
}

var expandAroundCenter = function(s, left, right) {
    // Even length
    // O(n)
    // Edge case
    if (left < 0 || right >= s.length) {
        return 0;
    }
    if (s[left] !== s[right]) {
        return 0;
    }
    let l = left;
    let r = right;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
    }
    return r - l - 1;
}
