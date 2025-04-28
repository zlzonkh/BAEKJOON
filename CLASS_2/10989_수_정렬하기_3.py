# Node.js로 제출이 불가능한 문제라 Python으로 작성

import sys

input = sys.stdin.readline
write = sys.stdout.write
N = int(input())
count = {}
for _ in range(N):
    num = int(input())
    if num in count:
      count[num] += 1
    else:
      count[num] = 1

for i in range(1, 10001):
    if i in count:
        for _ in range(count[i]):
          write(f"{i}\n")