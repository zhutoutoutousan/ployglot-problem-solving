#include <bits/stdc++.h>
using namespace std;

const int MOD = 998244353;
const int MAXN = 5e5 + 5;

int n;
vector<pair<int,int>> bounds;

// Calculate (a * b) % MOD avoiding overflow
long long mulmod(long long a, long long b) {
    a %= MOD;
    b %= MOD;
    return (a * b) % MOD;
}

// Calculate (base^exp) % MOD
long long powmod(long long base, long long exp) {
    long long result = 1;
    base %= MOD;
    while (exp > 0) {
        if (exp & 1) result = mulmod(result, base);
        base = mulmod(base, base);
        exp >>= 1;
    }
    return result;
}

// Calculate modular inverse using Fermat's little theorem
long long modinv(long long a) {
    return powmod(a, MOD - 2);
}

// Calculate nCr % MOD
long long nCr(int n, int r) {
    if (r > n) return 0;
    if (r == 0 || r == n) return 1;
    
    long long num = 1, den = 1;
    for (int i = 0; i < r; i++) {
        num = mulmod(num, n - i);
        den = mulmod(den, i + 1);
    }
    return mulmod(num, modinv(den));
}

// Count valid height assignments for a segment
long long countSegmentWays(int len, int l, int r) {
    if (l > r) return 0;
    if (len == 1) return r;
    
    long long ways = 0;
    
    // For each possible maximum height
    for (int h = 1; h <= r; h++) {
        // Count ways to arrange other buildings
        // All other buildings must be at most h-l
        int maxOther = max(0, h - l);
        if (maxOther == 0) continue;
        
        // Use inclusion-exclusion to count valid arrangements
        // where all buildings satisfy the constraints
        for (int i = 0; i < len - 1; i++) {
            long long contrib = mulmod(nCr(len - 1, i), powmod(maxOther, len - 1 - i));
            if (i % 2 == 0) {
                ways = (ways + contrib) % MOD;
            } else {
                ways = (ways - contrib + MOD) % MOD;
            }
        }
    }
    
    return ways;
}

// Count valid permutations for a segment
long long countPermutations(int len) {
    // For a segment of length len, we need the last building
    // to be built after all others in the segment
    return nCr(len - 1, len - 1);
}

// Solve using combinatorics
long long solve() {
    if (n == 1) return bounds[0].second;
    
    long long result = 0;
    
    // For each possible last building
    for (int last = 0; last < n; last++) {
        // Try all possible segment lengths containing last
        for (int len = 1; len <= n; len++) {
            // Try all possible positions for the segment
            for (int start = max(0, last - len + 1); start <= min(n - len, last); start++) {
                // Calculate segment contribution
                long long ways = countSegmentWays(len, bounds[last].first, bounds[last].second);
                ways = mulmod(ways, countPermutations(len));
                
                // Calculate ways to arrange other buildings
                if (start > 0) {
                    ways = mulmod(ways, powmod(n - len, start));
                }
                if (start + len < n) {
                    ways = mulmod(ways, powmod(n - len, n - (start + len)));
                }
                
                result = (result + ways) % MOD;
            }
        }
    }
    
    return result;
}

// For n=2, explicitly count all possibilities
long long solveN2(int l1, int r1, int l2, int r2) {
    long long ans = 0;
    
    // Only case: Each building in its own segment
    // Can be built in either order, but segments must not merge
    for (int h1 = 1; h1 <= r1; h1++) {
        if (h1 < l1) continue;  // h1 must satisfy first building's constraints
        
        for (int h2 = 1; h2 <= r2; h2++) {
            if (h2 < l2) continue;  // h2 must satisfy second building's constraints
            
            // h2 must be greater than h1 to prevent segments from merging
            if (h2 <= h1) continue;
            
            // For each valid height pair, we can build in either order
            ans = (ans + 2) % MOD;
        }
    }
    
    return ans;
}

// For n=3, explicitly count all possibilities
long long solveN3(int l1, int r1, int l2, int r2, int l3, int r3) {
    long long ans = 0;
    
    // Try all possible heights
    for (int h1 = 1; h1 <= r1; h1++) {
        if (h1 < l1) continue;
        
        for (int h2 = h1 + 1; h2 <= r2; h2++) {  // h2 must be > h1
            if (h2 < l2) continue;
            
            for (int h3 = h2 + 1; h3 <= r3; h3++) {  // h3 must be > h2
                if (h3 < l3) continue;
                
                // For each building in its own segment:
                // The difference must satisfy its constraints
                if (h1 != l1) continue;  // For building 1
                if (h2 != l2) continue;  // For building 2
                if (h3 != l3) continue;  // For building 3
                
                // Since segments must be separate and differences are exact,
                // there's only one valid build order: 1, 2, 3
                ans = (ans + 1) % MOD;
            }
        }
    }
    
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    
    cin >> n;
    bounds.resize(n);
    for (int i = 0; i < n; i++) {
        cin >> bounds[i].first >> bounds[i].second;
    }
    
    if (n == 1) {
        cout << bounds[0].second << "\n";
        return 0;
    }
    
    if (n == 2) {
        int l1 = bounds[0].first, r1 = bounds[0].second;
        int l2 = bounds[1].first, r2 = bounds[1].second;
        cout << solveN2(l1, r1, l2, r2) << "\n";
        return 0;
    }
    
    if (n == 3) {
        int l1 = bounds[0].first, r1 = bounds[0].second;
        int l2 = bounds[1].first, r2 = bounds[1].second;
        int l3 = bounds[2].first, r3 = bounds[2].second;
        cout << solveN3(l1, r1, l2, r2, l3, r3) << "\n";
        return 0;
    }
    
    cout << solve() << "\n";
    
    return 0;
} 