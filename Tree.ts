import {TreeNode} from "./TreeNode";
export interface Tree<G> {
    insert(data: G): TreeNode<G>;

    inorder(node: TreeNode<G>): void;

    getSize(): number;
}