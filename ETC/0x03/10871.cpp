#include <iostream>
using namespace std;

int n, x, a[10005];
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    #ifndef ONLINE_JUDGE
    freopen("./testcase/10871.txt", "r", stdin);
    #endif
    cin >> n >> x;
    for(int i = 0; i < n; i++) cin >> a[i];
    for(int i = 0; i < n; i++) if(a[i] < x) cout << a[i] << ' ';
}
