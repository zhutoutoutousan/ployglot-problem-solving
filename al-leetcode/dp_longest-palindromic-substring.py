class Solution:
    def longestPalindrome(self, s: str) -> str:
        res = ""
        resLen = 0

        for i in range(len(s)):
            # odd case, like "aba"
            tmp = self.helper(s, i, i)
            if len(tmp) > resLen:
                res = tmp
                resLen = len(tmp)

            # even case, like "abba"
            tmp = self.helper(s, i, i + 1)
            if len(tmp) > resLen:
                res = tmp
                resLen = len(tmp)

        return res

    def helper(self, s, l, r):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        return s[l + 1:r]