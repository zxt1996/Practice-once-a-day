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
 var minDepth = function(root) {
    if (!root) {
        return 0;
    }

    let getLevel = (node) => {
        if (!node) {
            return 0;
        }

        let left =  getLevel(node.left) + 1;
        let right = getLevel(node.right) + 1;

        return (left !== 1 && right !== 1) ? Math.min(left, right) : Math.max(left, right);
    }
    return getLevel(root);
};