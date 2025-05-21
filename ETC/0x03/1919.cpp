#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    #ifndef ONLINE_JUDGE
    freopen("./testcase/1919.txt", "r", stdin);
    #endif

    string word1, word2;
    int count1[26] = {};
    int count2[26] = {};
    int answer = 0;
    cin >> word1 >> word2;
    for(char c : word1) count1[c - 'a']++;
    for(char c : word2) count2[c - 'a']++;
    for(int i = 0; i < 26; i++){
        answer += abs(count1[i] - count2[i]);
    }
    cout << answer << '\n';
}
