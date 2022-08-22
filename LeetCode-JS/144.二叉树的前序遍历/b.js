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
 var preorderTraversal = function(root) {
    if (!root) {
        return [];
    }

    let tempList = [root], result = [];

    while (tempList.length > 0) {
        let tempNode = tempList.pop();
        result.push(tempNode.val);

        tempNode.right && tempList.push(tempNode.right);
        tempNode.left && tempList.push(tempNode.left);
    }

    return result;
};