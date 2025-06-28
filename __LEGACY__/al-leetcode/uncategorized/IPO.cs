public class Solution {
    public int FindMaximizedCapital(int k, int w, int[] profits, int[] capital) {
        // Initial case
        if (k == 0 || profits.Length == 0 || capital.Length == 0) return w;
        // k=1
        if (k == 1) {
            int max = 0;
            for (int i = 0; i < profits.Length; i++) {
                if (capital[i] <= w) {
                    max = Math.Max(max, profits[i]);
                }
            }
            return w + max;
        }
        // k = 2 
        if (k == 2) {
            int max = 0;
            for (int i = 0; i < profits.Length; i++) {
                if (capital[i] <= w) {
                    for (int j = 0; j < profits.Length; j++) {
                        if (capital[j] <= w + profits[i]) {
                            max = Math.Max(max, profits[i] + profits[j]);
                        }
                    }
                }
            }
            return w + max;
        }
        var n = profits.Length;
        var arr = new int[n][];
        for (int i = 0; i < n; i++)
        {
            arr[i] = new int[] { capital[i], profits[i] };
        }
        Array.Sort(arr, (a, b) => a[0] - b[0]);
        // Using the generic type 'PriorityQueue<TElement, TPriority>' requires 2 type arguments
        var pq = new PriorityQueue<int, int>();
        int idx = 0;
        for (int i = 0; i < k; i++)
        {
            while (idx < n && arr[idx][0] <= w)
            {
                pq.Enqueue(arr[idx][1], arr[idx][1]);
                idx++;
            }
            if (pq.Count == 0)
            {
                break;
            }
            w += pq.Dequeue();
        }
        return w;
    }


}