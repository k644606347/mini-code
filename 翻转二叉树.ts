/**
 * Definition for a binary tree node.
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

/**
 * 递归
 * 时间：O(n)
 * 
 * @param root 
 */
function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root)
        return root;

    function _invert(root: TreeNode) {
        let temp = root.left;
        root.left = root.right;
        root.right = temp;
        if (root.left) {
            _invert(root.left);
        }

        if (root.right) {
            _invert(root.right);
        }

        return root;
    }

    return _invert(root);
};

/**
 * 递推
 * 时间：O(n)
 * @param root 
 */
function invertTree2(root: TreeNode | null): TreeNode | null {
    if (!root)
        return root;

    const stack: TreeNode[] = [root];
    while (stack.length) {
        const node = stack.pop();

        if (!node)
            break;

        if (node.right) {
            stack.unshift(node.right);
        }

        if (node.left) {
            stack.unshift(node.left);
        }

        let temp = node.left;
        node.left = node.right;
        node.right = temp;
    }

    return root;
};