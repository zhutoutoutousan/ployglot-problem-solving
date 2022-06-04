from tempfile import tempdir

# https://leetcode.com/problems/climbing-stairs/
# https://www.youtube.com/watch?v=Y0lT9Fck7qI
class Solution(object):
    def climbStairs(self, n:int)->int:
        """
        :type n: int
        :rtype: int
        """
        one, two = 1, 1

        for i in range(n -1):
            memo = one
            one = one + two
            two = memo

        return one