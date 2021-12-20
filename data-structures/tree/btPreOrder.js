function dfsPreOrder(root) {
  //   preOrder(root, (root) => {
  //     console.log(root.value);
  //   });
  //If someone want to return a array then we can change to
  let res = [];
  preOrder(root, (root) => {
    res.push(root.value);
  });
  console.log("res is ", res); //res is  [ 1, 2, 3, 4, 5 ]
}

function preOrder(root, cb) {
  if (root == null) return;
  //pass a callback so we can change our behaiver later in it
  cb && cb(root); //root
  preOrder(root.left, cb); //left
  preOrder(root.right, cb); //right
}

const root = require("./root");
dfsPreOrder(root); //1 2 3 4 5 升序排列
