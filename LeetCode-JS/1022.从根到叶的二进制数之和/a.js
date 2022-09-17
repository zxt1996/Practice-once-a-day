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
 var sumRootToLeaf = function(root) {
    let result = 0;

    let getResult = (node, numList) => {
        if (!node) {
            return;
        }

        if (!node.left && !node.right) {
            let nowNum = parseInt(numList.join('') + node.val, 2);
            result += nowNum;
        }

        node.left && getResult(node.left, [...numList, node.val]);
        node.right && getResult(node.right, [...numList, node.val]);
    }

    getResult(root, []);

    return result;
};