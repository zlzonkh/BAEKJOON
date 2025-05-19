#include <iostream>
#include <cmath>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    #ifndef ONLINE_JUDGE
    freopen("./testcase/5554.txt", "r", stdin);
    #endif
    int timeSum = 0;
    for(int i = 0; i < 4; i++) {
        int tmp;
        cin >> tmp;
        timeSum += tmp;
    };
    cout << floor(timeSum / 60) << '\n' << (timeSum % 60) << '\n';
}
