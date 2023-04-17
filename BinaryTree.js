"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
var TreeNode_1 = require("./TreeNode");
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
        this.totalNode = 0;
    }
    BinaryTree.prototype.insert = function (data) {
        if (!this.root) {
            this.root = new TreeNode_1.TreeNode(data);
            this.totalNode++;
            return this.root;
        }
        else {
            var node = new TreeNode_1.TreeNode(data);
            var currentNode = this.root;
            while (currentNode) {
                if (data === currentNode.data) {
                    throw new Error('Node data existed');
                }
                else if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                }
                else {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
            this.totalNode++;
            return currentNode;
        }
    };
    BinaryTree.prototype.getSize = function () {
        return this.totalNode;
    };
    BinaryTree.prototype.preorder = function (node) {
        if (node) {
            console.log(node.data);
            if (node.left) {
                this.preorder(node.left);
            }
            if (node.right) {
                this.preorder(node.right);
            }
        }
    };
    BinaryTree.prototype.inorder = function (node) {
        if (node) {
            if (node.left) {
                this.inorder(node.left);
            }
            console.log(node.data);
            if (node.right) {
                this.inorder(node.right);
            }
        }
    };
    BinaryTree.prototype.postorder = function (node) {
        if (node) {
            if (node.left) {
                this.postorder(node.left);
            }
            if (node.right) {
                this.postorder(node.right);
            }
            console.log(node.data);
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
