function binaryTreeInorder(root) {
  //递归函数在这里调用
  dfsInOrder(root);
}

//1 确定递归函数的的返回值和参数
// 遍历不需要返回值 所有return void
// 参数是 root 还需要额外的参数么？ 不需要 因为当前的父是下次遍历里面的子
//子可能为叶子节点为空 可以作为递归终止条件
function dfsInOrder(root) {
  //order is :  left root right
  //2 确定递归终止条件（避免stackoverflow）
  if (root == null) return;
  //3 单层的递归逻辑
  dfsInOrder(root.left);
  console.log(root.value);
  dfsInOrder(root.right);
}

const root = require("./root");
binaryTreeInorder(root);
