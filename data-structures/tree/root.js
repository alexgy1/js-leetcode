const node4 = {
  value: 5,
  left: null,
  right: null,
};
const node3 = {
  value: 4,
  left: null,
  right: null,
};
const node2 = {
  value: 3,
  left: node3,
  right: node4,
};
const node1 = {
  value: 2,
  left: null,
  right: null,
};
const root = {
  value: 1,
  left: node1,
  right: node2,
};
module.exports = root;
