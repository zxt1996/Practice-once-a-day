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
 var maxDepth = function(root) {
    let level = 0;
    if (!root) {
        return level;
    }
    let tempList = [root];

    let getAllNode = (list) => {
        let nextList = [];
        while (list.length > 0) {
            let tempNode = list.pop();
            if (tempNode.left) {
                nextList.push(tempNode.left);
            }

            if (tempNode.right) {
                nextList.push(tempNode.right);
            }
        }

        return nextList;
    }

    while (tempList.length > 0) {
        level++;

        tempList = getAllNode(tempList);
    }

    return level;
};