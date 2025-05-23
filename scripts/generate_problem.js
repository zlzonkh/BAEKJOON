const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const cheerio = require("cheerio");

const problemNumber = process.argv[2];
const mode = process.argv[3]; // js or cpp

if (!problemNumber) {
  console.error(
    "❌ 문제 번호를 입력하세요. 예: node scripts/generate_problem.js 2738"
  );
  process.exit(1);
}

const url = `https://www.acmicpc.net/problem/${problemNumber}`;
fetch(url, {
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
  },
})
  .then((res) => res.text())
  .then((body) => {
    const $ = cheerio.load(body);
    let title = $("#problem_title").text().trim();
    let sampleInput = $("#sample-input-1").text().trim();

    if (!title) {
      console.error(
        "❌ 문제 제목을 찾을 수 없습니다. 문제 제목을 수동으로 입력해주세요."
      );
      title = "";
    }

    if (!sampleInput) {
      console.error(
        "❌ 예제 입력을 찾을 수 없습니다. 예제 입력을 수동으로 입력해주세요."
      );
      sampleInput = "";
    }

    const safeTitle = title.replace(/\s+/g, "_").replace(/[^가-힣\w_]/g, "");
    const fileBase = `${problemNumber}_${safeTitle}`;

    if (mode === "cpp") {
      const cppContent = `#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    #ifndef ONLINE_JUDGE
    freopen("./testcase/${problemNumber}.txt", "r", stdin);
    #endif
}
`;
      fs.writeFileSync(`${problemNumber}.cpp`, cppContent);
      console.log(`✅ C++ 파일 생성됨: ${problemNumber}.cpp`);
    } else {
      const jsContent = `const problemNum = ${problemNumber};
const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "./testcase/" + problemNum + ".txt"
  )
  .toString()
  .trim()
  .split("\\n");
const output = [];

console.log(output.join("\\n"));
`;
      fs.writeFileSync(`${fileBase}.js`, jsContent);
      console.log(`✅ JS 파일 생성됨: ${fileBase}.js`);
    }

    const testcaseDir = path.join(__dirname, "..", "testcase");
    if (!fs.existsSync(testcaseDir)) {
      fs.mkdirSync(testcaseDir);
    }
    const testcasePath = path.join(testcaseDir, `${problemNumber}.txt`);
    fs.writeFileSync(testcasePath, sampleInput);
    console.log(`✅ 테스트케이스 파일 생성됨: ${testcasePath}`);
  })
  .catch((err) => {
    console.error("❌ 문제를 가져오는 중 오류 발생:", err);
  });
