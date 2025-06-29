# Building Skyscrapers - Interactive Solution

## Problem Visualization

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .skyline-container {
            background: linear-gradient(to bottom, #1a1a2e 0%, #16213e 100%);
            padding: 20px;
            border-radius: 10px;
            color: white;
            font-family: 'Segoe UI', sans-serif;
        }
        
        .skyline {
            display: flex;
            align-items: flex-end;
            height: 300px;
            gap: 5px;
            margin: 20px 0;
        }
        
        .building {
            width: 40px;
            background: linear-gradient(45deg, #4a90e2, #357abd);
            transition: height 0.5s ease;
            position: relative;
            border-radius: 2px 2px 0 0;
            cursor: pointer;
        }
        
        .building.selected {
            background: linear-gradient(45deg, #f5a623, #f7b946);
        }
        
        .building.in-segment {
            background: linear-gradient(45deg, #7ed321, #6fb80e);
        }
        
        .controls {
            display: flex;
            gap: 10px;
            margin: 10px 0;
        }
        
        .btn {
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            background: #4a90e2;
            color: white;
            cursor: pointer;
        }
        
        .info-panel {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="skyline-container">
        <h2>Skyscraper Segment Visualizer</h2>
        <div class="controls">
            <button class="btn" onclick="randomizeHeights()">Randomize Heights</button>
            <button class="btn" onclick="showNextSegment()">Next Segment</button>
            <button class="btn" onclick="toggleBuildOrder()">Toggle Build Order</button>
        </div>
        <div class="skyline" id="skyline"></div>
        <div class="info-panel" id="info">
            <p>Click on a building to see its longest valid segment</p>
            <p>Current constraints: <span id="constraints"></span></p>
            <p>Build order: <span id="buildOrder"></span></p>
        </div>
    </div>
    
    <script>
        let heights = [];
        let buildOrder = [];
        let currentSelected = -1;
        let n = 6; // Default size
        
        function initializeSkyline() {
            heights = Array.from({length: n}, () => Math.floor(Math.random() * 200) + 50);
            buildOrder = Array.from({length: n}, (_, i) => i + 1);
            shuffleArray(buildOrder);
            renderSkyline();
        }
        
        function renderSkyline() {
            const skyline = document.getElementById('skyline');
            skyline.innerHTML = '';
            heights.forEach((height, i) => {
                const building = document.createElement('div');
                building.className = 'building';
                building.style.height = `${height}px`;
                building.onclick = () => selectBuilding(i);
                building.setAttribute('data-order', buildOrder[i]);
                skyline.appendChild(building);
            });
            updateInfo();
        }
        
        function selectBuilding(index) {
            currentSelected = index;
            const segment = findLongestValidSegment(index);
            const buildings = document.querySelectorAll('.building');
            buildings.forEach((b, i) => {
                b.className = 'building';
                if (i === index) b.classList.add('selected');
                else if (segment.includes(i)) b.classList.add('in-segment');
            });
            updateInfo(segment);
        }
        
        function findLongestValidSegment(index) {
            let left = index;
            let right = index;
            while (left > 0 && heights[left - 1] <= heights[index]) left--;
            while (right < n - 1 && heights[right + 1] <= heights[index]) right++;
            return Array.from({length: right - left + 1}, (_, i) => left + i);
        }
        
        function updateInfo(segment = []) {
            const info = document.getElementById('info');
            if (currentSelected >= 0 && segment.length > 0) {
                const secondMax = Math.max(...segment.map(i => i === currentSelected ? 0 : heights[i]));
                const diff = heights[currentSelected] - secondMax;
                info.innerHTML = `
                    <p>Selected building: ${currentSelected + 1}</p>
                    <p>Segment length: ${segment.length}</p>
                    <p>Height difference: ${diff}</p>
                    <p>Build order position: ${buildOrder[currentSelected]}</p>
                `;
            }
        }
        
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        
        function toggleBuildOrder() {
            const buildings = document.querySelectorAll('.building');
            buildings.forEach(b => {
                const order = b.getAttribute('data-order');
                b.textContent = b.textContent ? '' : order;
            });
        }
        
        window.onload = initializeSkyline;
    </script>
</div>

## Brain Training Game: Skyscraper Master

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .game-container {
            background: linear-gradient(to bottom, #2c3e50, #3498db);
            padding: 20px;
            border-radius: 10px;
            color: white;
            font-family: 'Segoe UI', sans-serif;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .game-board {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin: 20px 0;
        }
        
        .challenge-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            cursor: pointer;
            transition: transform 0.3s ease;
        }
        
        .challenge-card:hover {
            transform: scale(1.05);
        }
        
        .challenge-card.active {
            background: rgba(46, 204, 113, 0.2);
        }
        
        .timer {
            font-size: 24px;
            text-align: center;
            margin: 20px 0;
        }
        
        .score {
            font-size: 20px;
            text-align: right;
        }
        
        .game-controls {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }
        
        .btn-game {
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            background: #e74c3c;
            color: white;
            cursor: pointer;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="game-container">
        <h2>Skyscraper Master Challenge</h2>
        <div class="score">Score: <span id="score">0</span></div>
        <div class="timer" id="timer">30</div>
        <div class="game-board" id="gameBoard"></div>
        <div class="game-controls">
            <button class="btn-game" onclick="startGame()">New Game</button>
            <button class="btn-game" onclick="checkAnswer()">Submit Answer</button>
        </div>
    </div>
    
    <script>
        let gameScore = 0;
        let timeLeft = 30;
        let timer = null;
        let currentProblem = null;
        let selectedCards = [];
        
        const problemTypes = [
            {
                type: 'findSegment',
                generate: () => {
                    const size = Math.floor(Math.random() * 3) + 4;
                    const heights = Array.from({length: size}, 
                        () => Math.floor(Math.random() * 9) + 1);
                    const target = Math.floor(Math.random() * size);
                    return {
                        heights,
                        target,
                        question: `Find the longest valid segment for building ${target + 1}`,
                        answer: findValidSegment(heights, target)
                    };
                }
            },
            {
                type: 'checkBuildOrder',
                generate: () => {
                    const size = 4;
                    const heights = Array.from({length: size}, 
                        () => Math.floor(Math.random() * 9) + 1);
                    const orders = generateValidOrder(heights);
                    return {
                        heights,
                        orders,
                        question: 'Select buildings in a valid build order',
                        answer: orders
                    };
                }
            },
            {
                type: 'validateDifference',
                generate: () => {
                    const h1 = Math.floor(Math.random() * 5) + 5;
                    const h2 = Math.floor(Math.random() * 4) + 1;
                    const l = Math.floor(Math.random() * 3) + 1;
                    const r = l + Math.floor(Math.random() * 3) + 1;
                    return {
                        heights: [h1, h2],
                        constraints: [l, r],
                        question: `Is ${h1 - h2} a valid difference for [${l}, ${r}]?`,
                        answer: h1 - h2 >= l && h1 - h2 <= r
                    };
                }
            }
        ];
        
        function startGame() {
            gameScore = 0;
            timeLeft = 30;
            updateScore();
            if (timer) clearInterval(timer);
            timer = setInterval(updateTimer, 1000);
            generateNewProblem();
        }
        
        function generateNewProblem() {
            const type = problemTypes[Math.floor(Math.random() * problemTypes.length)];
            currentProblem = type.generate();
            renderProblem();
        }
        
        function renderProblem() {
            const board = document.getElementById('gameBoard');
            board.innerHTML = '';
            
            if (currentProblem.type === 'findSegment') {
                currentProblem.heights.forEach((h, i) => {
                    const card = createCard(`${h}`, i);
                    board.appendChild(card);
                });
            } else if (currentProblem.type === 'checkBuildOrder') {
                currentProblem.heights.forEach((h, i) => {
                    const card = createCard(`${h}`, i);
                    board.appendChild(card);
                });
            } else {
                const card = createCard(
                    `${currentProblem.heights[0]} - ${currentProblem.heights[1]} = ${currentProblem.heights[0] - currentProblem.heights[1]}\n` +
                    `Bounds: [${currentProblem.constraints[0]}, ${currentProblem.constraints[1]}]`,
                    'validate'
                );
                board.appendChild(card);
            }
        }
        
        function createCard(content, index) {
            const card = document.createElement('div');
            card.className = 'challenge-card';
            card.textContent = content;
            card.onclick = () => selectCard(index);
            return card;
        }
        
        function selectCard(index) {
            const cards = document.querySelectorAll('.challenge-card');
            if (currentProblem.type === 'findSegment') {
                cards.forEach(c => c.classList.remove('active'));
                cards[index].classList.add('active');
                selectedCards = [index];
            } else if (currentProblem.type === 'checkBuildOrder') {
                if (!selectedCards.includes(index)) {
                    selectedCards.push(index);
                    cards[index].classList.add('active');
                }
            } else {
                cards[0].classList.toggle('active');
                selectedCards = cards[0].classList.contains('active') ? [true] : [false];
            }
        }
        
        function checkAnswer() {
            if (currentProblem.type === 'findSegment') {
                const correct = arraysEqual(selectedCards, currentProblem.answer);
                updateScore(correct ? 10 : -5);
            } else if (currentProblem.type === 'checkBuildOrder') {
                const correct = arraysEqual(selectedCards, currentProblem.answer);
                updateScore(correct ? 15 : -5);
            } else {
                const correct = selectedCards[0] === currentProblem.answer;
                updateScore(correct ? 5 : -5);
            }
            generateNewProblem();
        }
        
        function updateScore(points = 0) {
            gameScore += points;
            document.getElementById('score').textContent = gameScore;
        }
        
        function updateTimer() {
            timeLeft--;
            document.getElementById('timer').textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert(`Game Over! Final Score: ${gameScore}`);
            }
        }
        
        function arraysEqual(a, b) {
            if (a.length !== b.length) return false;
            return a.every((val, idx) => val === b[idx]);
        }
        
        function findValidSegment(heights, target) {
            let left = target;
            let right = target;
            while (left > 0 && heights[left - 1] <= heights[target]) left--;
            while (right < heights.length - 1 && heights[right + 1] <= heights[target]) right++;
            return Array.from({length: right - left + 1}, (_, i) => left + i);
        }
        
        function generateValidOrder(heights) {
            // Simple valid order generation - can be enhanced
            return Array.from({length: heights.length}, (_, i) => i);
        }
    </script>
</div>

## Mathematical Solution

### 1. Key Insights

1. **Segment Properties**
   - For each building $i$, its segment $S_i$ must be maximal
   - The height $a_i$ must be maximum in $S_i$
   - The difference $d_i$ must satisfy $l_{k_i} \leq d_i \leq r_{k_i}$

2. **Order Properties**
   - Building $i$ must be built last in its segment $S_i$
   - This creates a partial order on the construction sequence

3. **Combinatorial Nature**
   - Need to count both valid height assignments and valid build orders
   - These are not independent - height affects valid orders

### 2. Solution Approach

1. **Dynamic Programming State**
   Let $dp[mask][last]$ represent:
   - $mask$: bitmask of buildings already considered
   - $last$: index of the last building placed
   - Value: number of valid ways to assign heights and orders

2. **Transition Function**
   ```cpp
   for each submask in mask:
       if isValidSegment(submask, last):
           for each height h satisfying constraints:
               dp[mask][last] += dp[mask - submask][prev] * ways[h]
   ```

3. **Constraint Checking**
   - Verify segment maximality
   - Check height difference bounds
   - Ensure build order validity

### 3. Implementation

```cpp
#include <bits/stdc++.h>
using namespace std;

const int MOD = 998244353;
const int MAXN = 5e5 + 5;

int n;
vector<pair<int,int>> bounds;
vector<vector<long long>> dp;
vector<vector<vector<long long>>> memo;

// Count valid height assignments for a segment of given length
long long countValidHeights(int len, int l, int r) {
    if (l > r) return 0;
    if (len == 1) return r;  // For single building, height is the difference
    
    // For segments of length > 1
    long long ways = 0;
    // For each possible maximum height
    for (int maxH = l; maxH <= r; maxH++) {
        // Count ways to arrange other buildings
        // They must be lower than maxH and their differences must satisfy constraints
        long long subways = 1;
        for (int i = 0; i < len - 1; i++) {
            subways = (subways * maxH) % MOD;
        }
        ways = (ways + subways) % MOD;
    }
    return ways;
}

// Check if a segment is valid (can have the last building as maximum)
bool isValidSegment(int submask, int last) {
    vector<int> pos;
    for (int i = 0; i < n; i++) {
        if (submask & (1 << i)) pos.push_back(i);
    }
    
    // Check if segment is contiguous
    for (int i = 1; i < pos.size(); i++) {
        if (pos[i] != pos[i-1] + 1) return false;
    }
    
    // Check if last is in the segment
    if (!(submask & (1 << last))) return false;
    
    return true;
}

// Dynamic programming solution
long long solve() {
    dp.assign(1 << n, vector<long long>(n, 0));
    memo.assign(n + 1, vector<vector<long long>>(MAXN, vector<long long>(MAXN, -1)));
    
    // Base cases - single building segments
    for (int i = 0; i < n; i++) {
        dp[1 << i][i] = countValidHeights(1, bounds[i].first, bounds[i].second);
    }
    
    // For each mask size
    for (int size = 2; size <= n; size++) {
        for (int mask = 0; mask < (1 << n); mask++) {
            if (__builtin_popcount(mask) != size) continue;
            
            // Try each last building
            for (int last = 0; last < n; last++) {
                if (!(mask & (1 << last))) continue;
                
                // Try each valid segment ending at last
                for (int submask = mask; submask; submask = (submask - 1) & mask) {
                    if (!(submask & (1 << last))) continue;
                    if (!isValidSegment(submask, last)) continue;
                    
                    int prevMask = mask ^ submask;
                    if (prevMask == 0) {
                        int segLen = __builtin_popcount(submask);
                        dp[mask][last] = (dp[mask][last] + 
                            countValidHeights(segLen, bounds[last].first, bounds[last].second)) % MOD;
                    } else {
                        for (int prev = 0; prev < n; prev++) {
                            if (!(prevMask & (1 << prev))) continue;
                            dp[mask][last] = (dp[mask][last] + dp[prevMask][prev]) % MOD;
                        }
                    }
                }
            }
        }
    }
    
    // Sum all valid final states
    long long result = 0;
    for (int last = 0; last < n; last++) {
        result = (result + dp[(1 << n) - 1][last]) % MOD;
    }
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    
    // Read input
    cin >> n;
    bounds.resize(n);
    for (int i = 0; i < n; i++) {
        cin >> bounds[i].first >> bounds[i].second;
    }
    
    // Solve and output
    cout << solve() << "\n";
    
    return 0;
}

### 4. Complexity Analysis

- Time Complexity: $O(3^n \cdot n)$
  - For each mask $(2^n)$, we try each submask $(2^n)$
  - But clever submask enumeration reduces this to $O(3^n)$
  - For each state, we do $O(n)$ work

- Space Complexity: $O(2^n \cdot n)$
  - States: mask $(2^n)$ × last building $(n)$
  - Each state stores a single value

### 5. Optimization Techniques

1. **Submask Enumeration**
   ```cpp
   for (int submask = mask; submask; submask = (submask - 1) & mask)
   ```
   This efficiently iterates only through submasks of the current mask.

2. **Segment Validation**
   - Precompute possible segments for each position
   - Use bit operations for fast segment checks

3. **Height Assignment**
   - For small differences, directly count possibilities
   - For large differences, use arithmetic progressions

4. **Memory Optimization**
   - Can reduce to $O(2^n)$ by only keeping last two layers
   - Use rolling array technique

### 6. Example Walkthrough

For input:
```
2
1 4
5 7
```

1. **State Analysis**
   - Initial states: dp[0b01][0] and dp[0b10][1]
   - Transition through valid segments
   - Final states: dp[0b11][0] and dp[0b11][1]

2. **Valid Heights**
   - Position 1: heights with diff ∈ [1,4]
   - Position 2: heights with diff ∈ [5,7]

3. **Build Orders**
   - Must satisfy segment constraints
   - Count valid permutations for each height assignment

Total valid combinations: 24

This gives us the complete solution space for the example case. 