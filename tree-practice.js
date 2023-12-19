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
  if (rootNode == null) {
    return true;
  }

  let height1 = getHeight(rootNode.left);
  let height2 = getHeight(rootNode.right);
  if (height1 + 1 == height2 || height1 == height2 + 1 || height1 == height2) {
    let result = balancedTree(rootNode.left);
    if (result) {
      return balancedTree(rootNode.right);
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function countNodes(rootNode) {
  // Your code here
  if (rootNode === null) {
    return 0;
  }
  return countNodes(rootNode.left) + countNodes(rootNode.right) + 1;
}

function getParentNode(rootNode, target) {
  // Your code here
  if (rootNode === null) {
    return null;
  }
  if (rootNode.val === target) {
    return null;
  }

  if (rootNode.left !== null && rootNode.left.val === target) {
    return rootNode;
  }
  if (rootNode.right !== null && rootNode.right.val === target) {
    return rootNode;
  }
  let result = getParentNode(rootNode.left, target);
  if (result) {
    return result;
  }
  result = getParentNode(rootNode.right, target);
  if (result) {
    return result;
  } else {
    return undefined;
  }
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
  if (rootNode == null) {
    return null;
  }

  let data = [];
  inOrderHelper(rootNode, data);
  if (target in data) {
    let index = data.indexOf(target);
    if (index === 0) {
      return null;
    }
    return data[index - 1];
  } else {
    return undefined;
  }
}

function inOrderHelper(rootNode, data) {
  if (rootNode == null) {
    return;
  }
  inOrderHelper(rootNode.left, data);
  data.push(rootNode.val);
  inOrderHelper(rootNode.right, data);
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  let rootNodeCopy = rootNode;
  let parent = rootNode;

  while (rootNode != null) {
    if (rootNode.val === target) {
      break;
    }
    parent = rootNode;
    if (target < rootNode.val) {
      rootNode = rootNode.left;
    } else {
      rootNode = rootNode.right;
    }
  }
  // Undefined if the target cannot be found
  if (rootNode === null) {
    return undefined;
  }
  // // Set target based on parent
  // parent.val = target;

  if (parent == rootNode && rootNode.left === null && rootNode.right === null) {
    // Case 0: Zero children and no parent:
    //   return null
    return null;
  }
  if (rootNode.left === null && rootNode.right === null) {
    // Case 1: Zero children:
    //   Set the parent that points to it to null
    if (parent.left.val === target) {
      parent.left = null;
    } else {
      parent.right = null;
    }
  } else if (rootNode.left !== null && rootNode.right !== null) {
    // Case 2: Two children:
    let predecessor = inOrderPredecessor(rootNodeCopy, target);
    let predecessorParent = getParentNode(rootNodeCopy, predecessor);
    rootNode.val = predecessor;

    if (
      predecessorParent.left != null &&
      predecessorParent.left.val == predecessor
    ) {
      predecessorParent.left = null;
    } else {
      predecessorParent.right = null;
    }
    //  Set the value to its in-order predecessor, then delete the predecessor
    //  Replace target node with the left most child on its right side,
    //  or the right most child on its left side.
    //  Then delete the child that it was replaced with.
  } else if (rootNode.left === null) {
    // Case 3: One child:
    //   Make the parent point to the child
    if (parent.left === rootNode) {
      parent.left = rootNode.right;
    } else {
      parent.right = rootNode.right;
    }
  } else {
    // Case 3: One child:
    //   Make the parent point to the child
    if (parent.left === rootNode) {
      parent.left = rootNode.left;
    } else {
      parent.right = rootNode.left;
    }
  }
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
