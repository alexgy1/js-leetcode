class Stack {
  constructor() {
    this.datas = {};
    this.count = 0;
  }

  push(ele) {
    this.datas[this.count] = ele;
    this.count++;
  }
  pop() {
    if (this.isEmpty()) return undefined;
    this.count--;
    const res = this.datas[this.count];
    delete this.datas[this.count];
    return res;
  }

  isEmpty() {
    return this.count == 0;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.datas[this.count - 1];
  }

  size() {
    return this.count;
  }

  clear() {
    this.count = 0;
    this.datas = {};
  }
}

let stack = new Stack();

console.log(stack.size());
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.size());
console.log(stack.peek());
console.log(stack.toString());
