class Heap {
  constructor(compareFn) {
    this.heap = [];
    this.compare = compareFn;
  }

  insert(value) {
    this.heap.push(value);

    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];
      if (this._heapRule(value, parent)) break;
      this.heap[parentIdx] = value;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const top = this.heap[0];
    this.heap[0] = this.heap.pop();

    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swapIdx = null;

      if (leftIdx < length) {
        if (!this._heapRule(this.heap[leftIdx], element)) {
          swapIdx = leftIdx;
        }
      }

      if (rightIdx < length) {
        if (
          (swapIdx === null && !this._heapRule(this.heap[rightIdx], element)) ||
          (swapIdx !== null &&
            !this._heapRule(this.heap[rightIdx], this.heap[swapIdx]))
        ) {
          swapIdx = rightIdx;
        }
      }

      if (swapIdx === null) break;

      this.heap[idx] = this.heap[swapIdx];
      this.heap[swapIdx] = element;
      idx = swapIdx;
    }

    return top;
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }

  _heapRule(child, parent) {
    return this.compare >= 0;
  }
}
