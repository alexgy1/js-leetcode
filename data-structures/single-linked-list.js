/**
 *
 * 单链表 由多个node组成
 *
 * 每个node有value 数据和 next指针 两个属性组合
 *
 * 逻辑结构属于线性表的一种
 *
 * 物理结构不连续 通过next指针找到下一个节点
 *
 * 增加 删除 时间复杂度是O(1) 查找的时间复杂度是O(n)
 *
 *
 *
 */
class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SingleLikedList {
  constructor() {
    this.head = null;
    this.count = 0; //记录链表元素的个数
  }

  //ele 要添加的元素的值
  push(val) {
    const node = new Node(val);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      //头节点不为空 找到符合的node添加
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      //current.next 为空 可以添加了
      current.next = node;
    }
    this.count++;
  }

  insert(index, val) {
    if (index < 0 || index > this.size) return;
    var node = new Node(val);

    if (index == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      var prev = this.getElementAt(index - 1),
        cur = prev.next;

      if (cur.next == null) {
        cur.next = node;
      } else {
        node.next = cur;
        prev.next = node;
      }
    }
  }

  getElementAt(index) {
    if (index < 0 || index > this.count) return undefined;

    let node = this.head;
    for (let i = 0; i < index && node !== null; i++) {
      node = node.next;
    }
    //i == index
    return node;
  }

  insert(val, index) {
    if (index < 0 || index > this.count) return false;

    //index 在范围内
    const node = new Node(val);
    if (index == 0) {
      //从头部插入
      const current = this.head;

      // head => Node
      //1 save head  let cur = this.head
      //newNode.next
      node.next = this.head;
      this.head = node;
    } else {
      //从尾部插入
      const prev = this.getElementAt(index - 1);
      // prev --> next
      //1 newNode .next = prev.next
      // newNode -->next
      //2 prev.next = newNode
      //prev --> newNode

      node.next = prev.next.next;
      prev.next = node;
    }
    this.count++;
    return true; //代表插入成功
  }
  //removeAt(index)
  removeAt(index) {
    if (index < 0 || index >= this.count) throw new Error("index超过范围");
  }

  //util methods
  size() {
    return this.count;
  }
  isEmpty() {
    return this.size() == 0;
  }
  getHead() {
    return this.head;
  }
  clear() {
    this.head = null;
    this.count = 0;
  }
}

var ll = new SingleLikedList();

console.log(ll);
ll.insert;
