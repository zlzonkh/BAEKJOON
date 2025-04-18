const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const filePath = process.argv[2];
if (!filePath) {
  console.error('사용법: node scripts/commit_problem.js <파일경로>');
  process.exit(1);
}

const filename = path.basename(filePath, '.js'); // 예: 10818_최소_최대
const match = filename.match(/^(\d+)_([\s\S]+)$/);
if (!match) {
  console.error('파일명이 "[문제번호]_[문제이름].js" 형식이어야 합니다.');
  process.exit(1);
}

const problemNum = match[1];
const rawTitle = match[2];
const title = rawTitle.replace(/_/g, ' ');

const commitMessage = `boj/${problemNum}: ${title}`;

// 관련 testcase 경로
const testcasePath = path.join('testcase', `${problemNum}.txt`);
const addPaths = [filePath];

// testcase 파일이 존재하면 같이 add
if (fs.existsSync(testcasePath)) {
  addPaths.push(testcasePath);
}

try {
  execSync(`git add ${addPaths.map(p => `"${p}"`).join(' ')}`);
  execSync(`git commit -m "${commitMessage}"`);
  console.log(`✅ 커밋 완료: ${commitMessage}`);
} catch (err) {
  console.error('❌ Git 명령 실행 중 오류 발생:', err.message);
}