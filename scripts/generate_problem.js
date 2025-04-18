const fs = require('fs');
const path = require('path');

const [,, problemNum, problemName, folderPath] = process.argv;

if (!problemNum || !problemName || !folderPath) {
  console.error('사용법: node generate_problem.js [문제번호] [문제이름] [폴더경로]');
  process.exit(1);
}

const filename = `${problemNum}_${problemName}.js`;
const filePath = path.join(folderPath, filename);
const testcasePath = path.join('testcase', `${problemNum}.txt`);

if (fs.existsSync(filePath)) {
  console.warn('⚠️ 이미 해당 문제 파일이 존재합니다.');
} else {
  const template = `const problemNum = ${problemNum};
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\\n');
const output = [];

console.log(output.join('\\n'));
`;
  fs.writeFileSync(filePath, template);
  console.log(`✅ 문제 파일 생성됨: ${filePath}`);
}

if (!fs.existsSync(testcasePath)) {
  fs.writeFileSync(testcasePath, '');
  console.log(`✅ 테스트케이스 파일 생성됨: ${testcasePath}`);
} else {
  console.log(`ℹ️ 테스트케이스 파일 이미 존재: ${testcasePath}`);
}