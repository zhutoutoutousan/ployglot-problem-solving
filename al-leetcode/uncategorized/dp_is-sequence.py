class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        # Greedy algorithm
        # Time: O(n)
        # Space: O(1)
        if not s:
            return True
        if not t:
            return False
        i = 0
        j = 0
        while i < len(s) and j < len(t):
            if s[i] == t[j]:
                i += 1
            j += 1
        return i == len(s)