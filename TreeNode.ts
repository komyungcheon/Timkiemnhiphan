export class TreeNode<G> {
    data : G;
    left : TreeNode<G>;
    right : TreeNode<G>;
    constructor(data :G) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}