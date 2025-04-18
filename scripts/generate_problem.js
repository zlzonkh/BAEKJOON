const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

const problemNumber = process.argv[2];

if (!problemNumber) {
  console.error('❌ 문제 번호를 입력하세요. 예: node scripts/generate_problem.js 2738');
  process.exit(1);
}

const url = `https://www.acmicpc.net/problem/${problemNumber}`;
fetch(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
})
  .then(res => res.text())
  .then(body => {
    const $ = cheerio.load(body);
    const title = $('#problem_title').text().trim();
    const sampleInput = $('#sample-input-1').text().trim();

    if (!title || !sampleInput) {
      console.error('❌ 문제 제목 또는 예제 입력을 찾을 수 없습니다.');
      process.exit(1);
    }
    console.log(title);

    const safeTitle = title
      .replace(/\s+/g, '_')
      .replace(/[^가-힣\w_]/g, '');
    const fileName = `${problemNumber}_${safeTitle}.js`;
    const jsContent = `const problemNum = ${problemNumber};
const input = require('fs')
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./testcase/" + problemNum + ".txt")
    .toString()
    .trim()
    .split('\\n');
let output = [];

console.log(output.join('\\n'));
`;

    // JS 파일 생성
    fs.writeFileSync(fileName, jsContent);
    console.log(`✅ JS 파일 생성됨: ${fileName}`);

    // 테스트케이스 폴더 및 파일 생성
    const testcaseDir = path.join(__dirname, '..', 'testcase');
    if (!fs.existsSync(testcaseDir)) {
      fs.mkdirSync(testcaseDir);
    }

    const testcasePath = path.join(testcaseDir, `${problemNumber}.txt`);
    fs.writeFileSync(testcasePath, sampleInput);
    console.log(`✅ 테스트케이스 파일 생성됨: ${testcasePath}`);
  })
  .catch(err => {
    console.error('❌ 문제를 가져오는 중 오류 발생:', err);
  });
