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
    if (!root || (!root.left && !root.right)) {
        return true;
    }

    if (root.left && !root.right || (root.right && !root.left)) {
        return false;
    }

    let tempList = [root.left, root.right];

    while (tempList.length > 0) {
        let left = tempList.shift(), right = tempList.pop();

        if (left.val !== right.val) {
            return false;
        }

        if (!left.left && right.right || (left.left && !right.right)) {
            return false;
        }

        if (left.left && right.right) {
            tempList.unshift(left.left);
            tempList.push(right.right);
        }

        if (left.right && !right.left || (!left.right && right.left)) {
            return false;
        }

        if (left.right && right.left) {
            tempList.unshift(left.right);
            tempList.push(right.left);
        }
    }

    return true;
};