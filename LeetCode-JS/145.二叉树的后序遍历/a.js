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
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    if (!root) {
        return [];
    }

    let tempList = [root], result = [];

    while (tempList.length > 0) {
        let currentNode = tempList.pop();
        result.unshift(currentNode.val);
        currentNode.left && tempList.push(currentNode.left);
        currentNode.right && tempList.push(currentNode.right);
    }

    return result;
};