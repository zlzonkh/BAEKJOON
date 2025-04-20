const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const arg = process.argv[2];

if (!arg) {
  console.error('문제 번호를 입력하세요. 예: npm run commit 2738');
  process.exit(1);
}

const isPath = arg.endsWith('.js') || arg.includes('/');
let filePath;

if (isPath) {
  filePath = arg;
} else {
  // 문제번호만 입력된 경우 → 폴더 전체에서 검색
  const problemNum = arg;
  const root = path.join(__dirname, '..');
  const allFiles = [];

  const walk = (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const full = path.join(dir, file);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        walk(full);
      } else if (stat.isFile() && file.startsWith(problemNum + '_') && file.endsWith('.js')) {
        allFiles.push(full);
      }
    }
  };

  walk(root);

  if (allFiles.length === 0) {
    console.error(`❌ ${problemNum}번에 해당하는 JS 파일을 찾을 수 없습니다.`);
    process.exit(1);
  } else if (allFiles.length > 1) {
    console.error(`❗ ${problemNum}번에 해당하는 파일이 여러 개입니다:\n${allFiles.join('\n')}`);
    process.exit(1);
  }

  filePath = allFiles[0];
}

// 파일명으로 커밋 메시지 구성
const filename = path.basename(filePath, '.js'); // 2738_행렬_덧셈
const match = filename.match(/^(\d+)_([\s\S]+)$/);
if (!match) {
  console.error('파일명이 "[문제번호]_[문제이름].js" 형식이어야 합니다.');
  process.exit(1);
}

const problemNum = match[1];
const title = match[2].replace(/_/g, ' ');
const commitMessage = `boj/${problemNum}: ${title}`;

const testcasePath = path.join('testcase', `${problemNum}.txt`);
const filesToAdd = [filePath];
if (fs.existsSync(testcasePath)) filesToAdd.push(testcasePath);

try {
  execSync(`git add ${filesToAdd.map(p => `"${p}"`).join(' ')}`);
  execSync(`git commit -m "${commitMessage}"`);
  console.log(`✅ 커밋 완료: ${commitMessage}`);
} catch (err) {
  console.error('❌ Git 커밋 실패:', err.message);
}
