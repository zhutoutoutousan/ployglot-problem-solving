class Solution:
    def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
        import heapq
        n = len(profits)
        p = [(capital[i], profits[i]) for i in range(n)]
        p.sort()
        q = []
        i = 0
        for _ in range(k):
            while i < n and p[i][0] <= w:
                heapq.heappush(q, -p[i][1])
                i += 1
            if q:
                w -= heapq.heappop(q)
        return w