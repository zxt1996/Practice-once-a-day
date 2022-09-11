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
 var minDiffInBST = function(root) {
    if (!root) {
        return 0;
    }

    let getSortList = (node) => {
        if (!node) {
            return [];
        }

        return [...getSortList(node.left), node.val, ...getSortList(node.right)];
    }

    let sortList = getSortList(root);

    let result = Infinity;

    sortList.forEach((item, index) => {
        if (index !== 0) {
            let val = Math.abs(sortList[index - 1] - item);
            result = Math.min(val, result);
        }
    })

    return result;
};