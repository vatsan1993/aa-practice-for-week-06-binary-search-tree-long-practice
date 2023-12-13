const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  // Your code here
  let currentNode = rootNode;
  while (currentNode.left !== null) {
    currentNode = currentNode.left;
  }
  return currentNode.val;
}

function findMaxBST(rootNode) {
  // Your code here
  let currentNode = rootNode;
  while (currentNode.right !== null) {
    currentNode = currentNode.right;
  }
  return currentNode.val;
}

function findMinBT(rootNode) {
  // Your code here
  let currentNode = rootNode;
  let minNode = currentNode;
  return findMinBTHelper(rootNode, minNode).val;
}
function findMinBTHelper(currentNode, minNode) {
  if (currentNode === null) {
    return minNode;
  }
  if (currentNode.val < minNode.val) {
    minNode = currentNode;
  }
  minNode = findMinBTHelper(currentNode.left, minNode);
  minNode = findMinBTHelper(currentNode.right, minNode);
  return minNode;
}

function findMaxBT(rootNode) {
  // Your code here
  let currentNode = rootNode;
  let maxNode = currentNode;
  return findMaxBTHelper(rootNode, maxNode).val;
}

function findMaxBTHelper(currentNode, maxNode) {
  if (currentNode === null) {
    return maxNode;
  }
  if (currentNode.val > maxNode.val) {
    maxNode = currentNode;
  }
  maxNode = findMaxBTHelper(currentNode.left, maxNode);
  maxNode = findMaxBTHelper(currentNode.right, maxNode);
  return maxNode;
}

function getHeight(rootNode) {
  // Your code here
  if (rootNode === null) {
    return -1;
  }
  if (rootNode.left === null && rootNode.right === null) {
    return 0;
  }
  return Math.max(getHeight(rootNode.left) + 1, getHeight(rootNode.right) + 1);
}

function balancedTree(rootNode) {
  // Your code here
}

function countNodes(rootNode) {
  // Your code here
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  // Undefined if the target cannot be found
  // Set target based on parent
  // Case 0: Zero children and no parent:
  //   return null
  // Case 1: Zero children:
  //   Set the parent that points to it to null
  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.
  // Case 3: One child:
  //   Make the parent point to the child
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST,
};
