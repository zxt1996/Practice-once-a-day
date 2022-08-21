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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    if (!root) {
        return  false;
    }

    let getValue = (node, currentValue) => {
        if (!node) {
            return false;
        }

        let tempValue = node.val + currentValue;
        if (!node.left && !node.right && tempValue === targetSum) {
            return true;
        }

        return getValue(node.left, tempValue) || getValue(node.right, tempValue); 
    }

    return getValue(root, 0);
};