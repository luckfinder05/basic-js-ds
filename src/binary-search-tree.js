const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.store = null;
    this.left = null;
    this.right = null;
  }

  root() {
    return this.store;
  }

  add(data) {
    if (this.store === null) {
      this.store = new Node(data)
      return
    }
    const newNode = new Node(data)
    const searchTree = (node) => {
      if (data < node.data) {
        if (!node.left) {
          node.left = newNode
        } else {
          searchTree(node.left)
        }
      } else if (data > node.data) {
        if (!node.right) {
          node.right = newNode
        } else {
          searchTree(node.right)
        }
      }
    }
    searchTree(this.store)
  }
  has(data) {
    const searchTree = (node) => {
      if (data === node.data) {
        return node;
      } else if (data < node.data) {
        if (!node.left) {
          return null
        } else {
          return searchTree(node.left)
        }
      } else if (data > node.data) {
        if (!node.right) {
          return null
        } else {
          return searchTree(node.right)
        }
      }
    }
    return searchTree(this.store) !== null;
  }

  find(data) {
    const searchTree = (node) => {
      if (data === node.data) {
        return node;
      } else if (data < node.data) {
        if (!node.left) {
          return null
        } else {
          return searchTree(node.left)
        }
      } else if (data > node.data) {
        if (!node.right) {
          return null
        } else {
          return searchTree(node.right)
        }
      }
    }
    return searchTree(this.store);
  }

  remove(data) {
    const deleteNode = (parent, searchData) => {
      if (parent === null) return null
      if (searchData < parent.data) {
        parent.left = deleteNode(parent.left, searchData);
      } else if (searchData > parent.data) {
        parent.right = deleteNode(parent.right, searchData);
      } else {
        if (!parent.left && !parent.right) {
          return null;
        } else if (!parent.left) {
          return parent.right;
        } else if (!parent.right) {
          return parent.left;
        }
        parent.data = this.min(parent.right);
        parent.right = deleteNode(parent.right, parent.data)
      }
      return parent;
    }

    deleteNode(this.store, data)
  }

  min(root) {
    let currNode = root || this.store;
    while (currNode.left) {
      currNode = currNode.left
    }
    return currNode.data
  }

  max() {
    let currNode = this.store;
    while (currNode.right) {
      currNode = currNode.right
    }
    return currNode.data
  }
}



module.exports = {
  BinarySearchTree
};
