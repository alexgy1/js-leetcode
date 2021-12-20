//
//Lowest common anster
//How to difne LCA ?
//For one node  if it's left child (or left child's child) is p
// and it's right child (right child's )is q then. we can call this node is the lca ofp and q
function lca(root, p, q) {
  postOrderRecursive(root, p, q);
}

function postOrderRecursive(root, p, q) {
  if (root == null) return;
  if (p == null && q == null) return null;
  if (p == null && q !== null) return q;
  if (p !== null && q == null) return p;
  //p q not null
}
