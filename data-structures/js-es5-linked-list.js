var ListNode = function (val, next) {
  next = next || null;
  this.val = val;
  this.next = next;
};
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this.size) return -1;
  var node = this.head;
  for (var i = 0; i < index; i++) {
    node = node.next;
  }
  return node;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  var newNode = new ListNode(val);

  //head-> node  <-newNode
  newNode.next = this.head;
  this.head = newNode;

  this.size++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  var node = this.head;
  while (node.next !== null) {
    node = node.next;
  }
  node.next = new ListNode(val);
  this.size++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index >= this.size) return;

  if (index == 0) {
    this.addAtHead(val);
  } else {
    if (index == this.size - 1) {
      this.addAtTail(val);
    } else {
      var cur = this.get(index);
      var newNode = new ListNode(val);

      newNode.next = cur.next;
      cur.next = newNode;
      this.size++;
    }
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index > this.size) return;
  //index is validate

  //prev cur next prev.next = cur.next

  if (index == 0) {
    //delete at head
    this.head = this.head.next;
  } else {
    if (index == this.size - 1) {
      //delete at last
    } else {
      var prev = this.get(index - 1),
        cur = prev.next;
      console.log("CUR");
      console.log(cur);
      prev.next = cur.next;
    }
  }
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var obj = new MyLinkedList();
obj.addAtHead(1);
obj.addAtTail(3);
obj.addAtIndex(0, "test 000 ");
obj.addAtIndex(2, "last");
obj.addAtIndex(1, 444);

obj.addAtHead(0);
var val = obj.get(0);

// console.log(val);
// // console.log("obj.size", obj.size);
// obj.deleteAtIndex(0);
console.log(JSON.stringify(obj, null, 4));
