// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file
// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    // Your code here
    let node = new TreeNode(val);
    if (this.root === null) {
      this.root = node;
    } else if (val < currentNode.val && currentNode.left === null) {
      currentNode.left = node;
    } else if (val > currentNode.val && currentNode.right === null) {
      currentNode.right = node;
    } else if (val < currentNode.val) {
      this.insert(val, currentNode.left);
    } else if (val > currentNode.val) {
      this.insert(val, currentNode.right);
    }
  }

  search(val) {
    // Your code here
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.val === val) {
        return true;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return false;
  }

  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode == null) {
      return;
    }
    // console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode == null) {
      return;
    }
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }

  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode == null) {
      return;
    }
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here

    // initialize a queue with the root node
    let queue = [this.root];

    // while the queue is not empty
    while (queue.length != 0) {
      // print and remove first node in queue
      let node = queue.shift();
      console.log(node.val);
      // if the node has a left node
      if (node.left != null) {
        // push the left node on the back of the queue
        queue.push(node.left);
      }
      // if the node has a right node
      if (node.right) {
        // push the right node on the back of the queue
        queue.push(node.right);
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
    // initialize a stack with the root node
    // displaying right to left
    let currentNode = this.root;
    let stack = [currentNode];

    // while the stack is not empty
    while (stack.length != 0) {
      // print and remove last node in stack

      let node = stack.pop();
      console.log(node.val);
      // if the node has a left node
      if (node.left != null) {
        // push the left node on the back of the stack
        stack.push(node.left);
      }
      // if the node has a right node
      if (node.right != null) {
        // push the right node on the back of the stack
        stack.push(node.right);
      }
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };

// Your code here
