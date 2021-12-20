function dfsPostOrder(root) {
  _postOrder(root);
}

function _postOrder(root) {
  //left right root
  if (root == null) return;
  _postOrder(root.left);
  _postOrder(root.right);
  console.log(root.value);
}

const root = require("./root");
dfsPostOrder(root);
