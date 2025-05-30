import sys

input = sys.stdin.readline
write = sys.stdout.write
N = int(input())
result = 1
for i in range(1, N + 1):
    result *= i
write(str(result))