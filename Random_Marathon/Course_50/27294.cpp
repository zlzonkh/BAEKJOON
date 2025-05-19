#include <iostream>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    #ifndef ONLINE_JUDGE
    freopen("./testcase/27294.txt", "r", stdin);
    #endif
    int T, S;
    cin >> T >> S;
    if(T >= 12 && T <= 16 && !S) cout << 320 << '\n';
    else cout << 280 << '\n';
}
