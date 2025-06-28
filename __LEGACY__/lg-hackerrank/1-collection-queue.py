import collections
import itertools

def deque(n):
    d = collections.deque()
    # Read input, if it's append {number}, append the number to the deque
    # If it's pop, pop the first element of the deque
    # If it's popleft, pop the last element of the deque
    # If it's appendleft, append the number to the front of the deque
    for _ in range(n):
        inp = input().split()
        if inp[0] == 'append':
            d.append(int(inp[1]))
        elif inp[0] == 'pop':
            d.pop()
        elif inp[0] == 'popleft':
            d.popleft()
        elif inp[0] == 'appendleft':
            d.appendleft(int(inp[1]))
    # Remove the None element in d
    d = list(filter(None, d))
    # Print the deque
    return ' '.join(map(str, d))

# Driver code
if __name__ == '__main__':
    n = int(input())
    print(deque(n))

