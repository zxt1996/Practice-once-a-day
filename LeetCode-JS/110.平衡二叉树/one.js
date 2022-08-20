/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
    if (!root) {
        return true;
    }

    let nowLevel = 1;

    let getTreeHeight = (tree, level) => {
        if (!tree) {
            return level;
        }

        let left = !tree.left ? level : getTreeHeight(tree.left, level + 1);
        let right = !tree.right ? level : getTreeHeight(tree.right, level + 1);

        return Math.max(left, right);
    }

    let getLevel = (node, level) => {
        if (!node) {
            return true;
        }

        let leftLevel = !node.left ? level : getTreeHeight(node.left, level + 1);
        let rightLevel  = !node.right ? level : getTreeHeight(node.right, level + 1);

        // console.log(node.left, leftLevel, node.right, rightLevel);

        if (Math.abs(leftLevel - rightLevel) > 1) {
            return false;
        }

        return getLevel(node.left, level + 1) && getLevel(node.right, level + 1);
    }

    return getLevel(root, nowLevel);
};

var isBalancedTwo = function(root) {
    if (!root) {
        return true;
    }

    let getTreeHeight = (tree) => {
        if (!tree) {
            return 0;
        }

        return Math.max(getTreeHeight(tree.left), getTreeHeight(tree.right)) + 1;
    }

    let getLevel = (node) => {
        if (!node) {
            return true;
        }

        if (Math.abs(getTreeHeight(node.left) - getTreeHeight(node.right)) > 1) {
            return false;
        }

        return getLevel(node.left) && getLevel(node.right);
    }

    return getLevel(root);
};