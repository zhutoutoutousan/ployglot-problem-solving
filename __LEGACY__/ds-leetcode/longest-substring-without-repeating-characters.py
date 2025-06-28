class Solution:
    def length_of_longest_substring(self, s: str) -> int:
        charSet = set()
        left = 0

        maxLen = 0
        currLen = 0

        for right in range(len(s)):
            while s[right] in charSet:
                charSet.remove(s[left])
                left += 1
                currLen -= 1

            charSet.add(s[right])
            currLen += 1

            maxLen = max(maxLen, currLen)

        return maxLen