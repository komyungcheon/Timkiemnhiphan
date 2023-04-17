import {Tree} from "./Tree";
import {TreeNode} from "./TreeNode";

export class BinaryTree<G> implements Tree<G> {
    root: TreeNode<G> | null;
    totalNode: number;

    constructor() {
        this.root = null;
        this.totalNode = 0;
    }

    insert(data: G): TreeNode<G> {
        if (!this.root) {
            this.root = new TreeNode<G>(data);
            this.totalNode ++;
            return this.root;
        } else {
            let node = new TreeNode<G>(data);
            let currentNode = this.root;
            while (currentNode) {
                if (data === currentNode.data) {
                    throw new Error('Node data existed')
                } else if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
            this.totalNode ++;
            return currentNode;
        }
    }

    getSize(): number {
        return this.totalNode;
    }

    preorder(node: TreeNode<G> | null): void {
        if (node) {
            console.log(node.data);
            if (node.left) {
                this.preorder(node.left);
            }
            if (node.right) {
                this.preorder(node.right);
            }
        }
    }

    inorder(node: TreeNode<G> | null): void {
        if (node) {
            if (node.left) {
                this.inorder(node.left);
            }
            console.log(node.data);
            if (node.right) {
                this.inorder(node.right);
            }
        }
    }
    postorder(node: TreeNode<G> | null): void {
        if (node) {
            if (node.left) {
                this.postorder(node.left);
            }
            if (node.right) {
                this.postorder(node.right);
            }
            console.log(node.data);
        }
    }
}
