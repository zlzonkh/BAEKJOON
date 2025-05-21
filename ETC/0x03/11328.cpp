#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    #ifndef ONLINE_JUDGE
    freopen("./testcase/11328.txt", "r", stdin);
    #endif

    int N;
    bool isFossible = true;
    cin >> N;
    for(int i = 0; i < N; i++){
        isFossible = true;
        int count[26] = {};
        string original, target;
        cin >> original;
        cin >> target;
        for(char c : original){
            count[c - 'a']++;
        }
        for(char c : target){
            count[c - 'a']--;
            if(count[c - 'a'] < 0) {
                isFossible = false; 
                break;
            };
        }
        for(char e : count){
            if(e != 0) {
                isFossible = false; 
                break;
            };
        }
        if(isFossible) cout << "Possible" << '\n';
        else cout << "Impossible" << '\n';
    }
}
