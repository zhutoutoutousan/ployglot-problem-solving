# https://leetcode.com/problems/delete-and-earn/submissions/
# https://www.youtube.com/watch?v=7FCemBxvGw0
class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        count = Counter(nums)
        num3 = sorted(list(set(nums)))

        earn1, earn2 = 0, 0
        for i in range(len(num3)):
            curEarn = num3[i] * count[num3[i]]
            if i > 0 and num3[i] == num3[i - 1] + 1:
                temp = earn2
                earn2 = max(curEarn + earn1, earn2)
                earn1 = temp
            else: 
                temp = earn2
                earn2 = curEarn + earn2
                earn1 = temp
        return earn2
