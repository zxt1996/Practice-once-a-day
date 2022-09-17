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
 var evaluateTree = function(root) {
    let getResult = (node) => {
        if (!node) {
            return;
        }

        if (node.left && node.right) {
            let isTrue = node.val === 2 ? (getResult(node.left) || getResult(node.right)) : (getResult(node.left) && getResult(node.right));
            node.val = isTrue ? 1 : 0;
        }

        return node.val;
    }
    
    return getResult(root);
};