# Node.js로 제출이 불가능한 문제라 Python으로 작성

import sys

input = sys.stdin.readline
write = sys.stdout.write
N = int(input())
S = [0] * 20
for _ in range(N):
  cmd = input().split()
  if len(cmd) > 1: cmd[1] = int(cmd[1]) - 1
  if cmd[0] == 'add':
    S[cmd[1]] = 1
  elif cmd[0] == 'remove':
    S[cmd[1]] = 0
  elif cmd[0] == 'check':
    write(f"{S[cmd[1]]}\n")
  elif cmd[0] == 'toggle':
    S[cmd[1]] = 1 if S[cmd[1]] == 0 else 0
  elif cmd[0] == 'all':
    S = [1] * 20
  elif cmd[0] == 'empty':
    S = [0] * 20