module.exports = function recursion(tree) {
  const arr = [];

  function traverse(binTree, level) {
    if (binTree) {
      if (arr.length < level) {
        arr.push([]);
      }
      const newarr = arr[level - 1];
      newarr.push(binTree.value);
      traverse(binTree.left, level + 1);
      traverse(binTree.right, level + 1);
    }
  }
  traverse(tree, 1);

  return arr;
};
