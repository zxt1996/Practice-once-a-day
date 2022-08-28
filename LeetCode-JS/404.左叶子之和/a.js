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
 * @return {number}
 */
 var sumOfLeftLeaves = function(root) {
    if (!root) {
        return 0;
    }

    let result = 0;

    let getLeftNode = (node) => {
        if (!node) {
            return;
        }
        if (node.left && !node.left.left && !node.left.right) {
            result += node.left.val;
        }

        node.left && getLeftNode(node.left);
        node.right && getLeftNode(node.right);
    }

    getLeftNode(root);

    return result;
};