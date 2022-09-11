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
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {
    if (!root) {
        return null;
    }

    let tempList = [root];

    while (tempList.length > 0) {
        let nowNode = tempList.pop();

        if (nowNode.val === val) {
            return nowNode;
        }

        nowNode.left && tempList.push(nowNode.left);
        nowNode.right && tempList.push(nowNode.right);
    }

    return null;
};