#include <iostream>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    #ifndef ONLINE_JUDGE
    freopen("./testcase/30030.txt", "r", stdin);
    #endif

    int B;
    cin >> B;
    cout << B / 1.1 << '\n';
}
