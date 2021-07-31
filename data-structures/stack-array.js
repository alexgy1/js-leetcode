class StackArray {
  constructor() {
    this.datas = [];
  }

  push(ele) {
    this.datas.push(ele);
  }
  pop() {
    return this.datas.pop();
  }
  peek() {
    return this.datas[this.datas.length - 1];
  }

  isEmpty() {
    return this.datas.length === 0;
  }

  size() {
    return this.datas.length;
  }

  clear() {
    this.datas = [];
  }
}
