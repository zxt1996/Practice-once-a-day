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
 var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    const mid = (rL, rR) => {
        if ((!rL && !rR)) {
            return true;
        }
        if (!rL || !rR) {
            return false;
        }
        return rL.val == rR.val && mid(rL.left, rR.right) && mid(rL.right, rR.left);  
    }

    return mid(root.left, root.right);
};